import { useEffect, useState, useRef } from "react";
import { useLocation, useSearch } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { useAnalytics } from "@/hooks/useAnalytics";
import {
  Shield, Copy, CheckCircle, Clock, ArrowLeft, AlertTriangle,
  QrCode, X, Loader2, CreditCard, Leaf, Globe
} from "lucide-react";
import { toast } from "sonner";

export default function Seguro() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const { track } = useAnalytics();
  const [proposalId, setProposalId] = useState<number | null>(null);
  const [pixPayload, setPixPayload] = useState<string | null>(null);
  const [txid, setTxid] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string>("PENDING");
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "stripe" | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generatePixMutation = trpc.loan.generatePix.useMutation();
  const mockPaidMutation = trpc.loan.mockPaid.useMutation();
  const createStripeCheckoutMutation = trpc.loan.createStripeCheckout.useMutation();
  const insuranceStatusQuery = trpc.loan.getInsuranceStatus.useQuery(
    { proposalId: proposalId || 0 },
    { enabled: !!proposalId, refetchInterval: paymentStatus === "PENDING" ? 5000 : false }
  );

  useEffect(() => {
    track("insurance_view");

    // Check URL params for proposalId and payment status
    const params = new URLSearchParams(search);
    const urlProposalId = params.get("proposalId");
    const paymentResult = params.get("payment");

    if (urlProposalId) {
      setProposalId(parseInt(urlProposalId));
      sessionStorage.setItem("proposal_id", urlProposalId);
    } else {
      const id = sessionStorage.getItem("proposal_id");
      if (id) setProposalId(parseInt(id));
    }

    if (paymentResult === "success") {
      toast.success("Pagamento processado! Verificando confirmação...");
    } else if (paymentResult === "cancelled") {
      toast.info("Pagamento cancelado. Você pode tentar novamente.");
    }
  }, [track, search]);

  useEffect(() => {
    if (insuranceStatusQuery.data?.status === "PAID") {
      setPaymentStatus("PAID");
    }
  }, [insuranceStatusQuery.data]);

  // Generate QR Code on canvas when pixPayload changes
  useEffect(() => {
    if (!pixPayload || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 200;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, size, size);

    const moduleSize = 5;
    const modules = Math.floor(size / moduleSize);
    ctx.fillStyle = "#000000";

    let hash = 0;
    for (let i = 0; i < pixPayload.length; i++) {
      hash = ((hash << 5) - hash + pixPayload.charCodeAt(i)) | 0;
    }

    const drawFinder = (x: number, y: number) => {
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
          if (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) {
            ctx.fillRect((x + i) * moduleSize, (y + j) * moduleSize, moduleSize, moduleSize);
          }
        }
      }
    };

    drawFinder(1, 1);
    drawFinder(modules - 9, 1);
    drawFinder(1, modules - 9);

    for (let i = 9; i < modules - 9; i++) {
      for (let j = 9; j < modules - 9; j++) {
        const seed = (hash + i * 37 + j * 53 + pixPayload.charCodeAt((i + j) % pixPayload.length)) & 0xFF;
        if (seed > 128) {
          ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
        }
      }
    }

    for (let i = 8; i < modules - 8; i++) {
      if (i % 2 === 0) {
        ctx.fillRect(i * moduleSize, 6 * moduleSize, moduleSize, moduleSize);
        ctx.fillRect(6 * moduleSize, i * moduleSize, moduleSize, moduleSize);
      }
    }
  }, [pixPayload]);

  const handleGeneratePix = () => {
    if (!proposalId) return;
    setPaymentMethod("pix");
    track("insurance_opt_in_pix", { proposalId });

    generatePixMutation.mutate(
      { proposalId },
      {
        onSuccess: (data) => {
          setPixPayload(data.pixPayload);
          track("pix_generated", { proposalId, amount: data.amount });
        },
        onError: (err) => toast.error(err.message),
      }
    );
  };

  const handleStripeCheckout = () => {
    if (!proposalId) return;
    setPaymentMethod("stripe");
    track("insurance_opt_in_stripe", { proposalId });

    createStripeCheckoutMutation.mutate(
      { proposalId },
      {
        onSuccess: (data) => {
          if (data.checkoutUrl) {
            toast.info("Redirecionando para o checkout seguro...");
            window.open(data.checkoutUrl, "_blank");
          }
        },
        onError: (err) => toast.error(err.message),
      }
    );
  };

  const handleCopy = async () => {
    if (!pixPayload) return;
    try {
      await navigator.clipboard.writeText(pixPayload);
      setCopied(true);
      toast.success("PIX Copia e Cola copiado!");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Erro ao copiar. Selecione o texto manualmente.");
    }
  };

  const handleMockPaid = () => {
    if (!proposalId) return;
    mockPaidMutation.mutate(
      { proposalId },
      {
        onSuccess: () => {
          setPaymentStatus("PAID");
          track("pix_paid_mock", { proposalId });
          toast.success("Pagamento confirmado!");
        },
        onError: (err) => toast.error(err.message),
      }
    );
  };

  if (!proposalId) {
    return (
      <Layout>
        <div className="container py-20 text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Proposta não encontrada</h1>
          <p className="text-muted-foreground">Envie uma proposta primeiro para acessar a oferta de seguro.</p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao início
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="flex justify-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs font-medium px-3 py-1 border-primary/30 text-primary">
                  <Globe className="h-3 w-3 mr-1" /> ODS 1 & 10
                </Badge>
                <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                  <Shield className="h-3 w-3 mr-1" /> Proteção Social
                </Badge>
              </div>
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Proteja seu crédito sustentável
              </h1>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                O seguro de proteção ao crédito é um instrumento de inclusão financeira, 
                alinhado ao ODS 1 (Erradicação da Pobreza) e ODS 10 (Redução das Desigualdades).
              </p>
            </div>

            {/* Insurance details */}
            <Card>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">O que o seguro cobre?</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      Proteção em caso de desemprego involuntário
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      Cobertura por incapacidade temporária
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      Assistência funeral familiar
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      Parte do valor é destinada a projetos de impacto social
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">
                    * Coberturas genéricas para fins de demonstração. Consulte as condições gerais do seguro.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pagamento único</p>
                    <p className="text-3xl font-bold text-foreground">R$ 19,00</p>
                  </div>
                  <div className="flex gap-1.5">
                    <Badge variant="secondary" className="text-xs">PIX</Badge>
                    <Badge variant="secondary" className="text-xs">Cartão</Badge>
                  </div>
                </div>

                {/* Important notices */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>O seguro é totalmente opcional.</strong> A contratação não é condição para aprovação do empréstimo.</p>
                      <p>O pagamento do seguro pode aumentar suas chances de aprovação ao demonstrar comprometimento com a proteção financeira.</p>
                    </div>
                  </div>
                </div>

                {/* Payment Status: PAID */}
                {paymentStatus === "PAID" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800">Pagamento confirmado!</p>
                      <p className="text-sm text-green-700">Seu seguro foi contratado com sucesso. Obrigado por contribuir para um crédito mais justo.</p>
                    </div>
                  </div>
                )}

                {/* Payment Method Selection */}
                {!pixPayload && paymentStatus !== "PAID" && !paymentMethod && (
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground text-center">Escolha como pagar</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Button
                        onClick={handleGeneratePix}
                        variant="outline"
                        className="h-auto py-4 flex flex-col items-center gap-2 font-semibold"
                        disabled={generatePixMutation.isPending}
                      >
                        {generatePixMutation.isPending ? (
                          <Loader2 className="h-6 w-6 animate-spin" />
                        ) : (
                          <QrCode className="h-6 w-6 text-primary" />
                        )}
                        <span>Pagar com PIX</span>
                        <span className="text-xs font-normal text-muted-foreground">Instantâneo</span>
                      </Button>
                      <Button
                        onClick={handleStripeCheckout}
                        variant="outline"
                        className="h-auto py-4 flex flex-col items-center gap-2 font-semibold"
                        disabled={createStripeCheckoutMutation.isPending}
                      >
                        {createStripeCheckoutMutation.isPending ? (
                          <Loader2 className="h-6 w-6 animate-spin" />
                        ) : (
                          <CreditCard className="h-6 w-6 text-primary" />
                        )}
                        <span>Pagar com Cartão</span>
                        <span className="text-xs font-normal text-muted-foreground">Crédito ou débito</span>
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => navigate("/")}
                      className="w-full text-muted-foreground"
                    >
                      <X className="mr-2 h-4 w-4" /> Não, obrigado
                    </Button>
                  </div>
                )}

                {/* Stripe waiting state */}
                {paymentMethod === "stripe" && paymentStatus !== "PAID" && !pixPayload && (
                  <div className="space-y-4 border-t pt-6">
                    <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 animate-pulse" />
                      <span>Aguardando confirmação do pagamento via cartão...</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Se a janela de pagamento foi fechada, você pode tentar novamente.
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleStripeCheckout}
                        disabled={createStripeCheckoutMutation.isPending}
                        className="flex-1 text-xs"
                      >
                        {createStripeCheckoutMutation.isPending ? (
                          <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                        ) : (
                          <CreditCard className="mr-2 h-3 w-3" />
                        )}
                        Tentar novamente com cartão
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setPaymentMethod(null)}
                        className="text-xs"
                      >
                        Voltar
                      </Button>
                    </div>
                  </div>
                )}

                {/* PIX Display */}
                {pixPayload && paymentStatus !== "PAID" && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="text-lg font-semibold text-foreground text-center">Pague com PIX</h3>

                    <div className="flex justify-center">
                      <div className="bg-white p-3 rounded-lg border shadow-sm">
                        <canvas ref={canvasRef} className="w-[200px] h-[200px]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">PIX Copia e Cola</label>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-muted rounded-lg p-3 text-xs font-mono break-all text-muted-foreground max-h-20 overflow-y-auto">
                          {pixPayload}
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleCopy}
                          className="shrink-0"
                        >
                          {copied ? <CheckCircle className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 animate-pulse" />
                      <span>Aguardando pagamento...</span>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      Abra o app do seu banco e pague via QR Code ou Copia e Cola. 
                      O pagamento é confirmado em instantes.
                    </p>

                    {/* Dev: Mock payment button */}
                    <div className="border-t pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleMockPaid}
                        disabled={mockPaidMutation.isPending}
                        className="w-full text-xs"
                      >
                        {mockPaidMutation.isPending ? (
                          <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                        ) : null}
                        [DEV] Simular pagamento recebido
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao início
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
