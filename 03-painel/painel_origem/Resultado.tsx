import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAnalytics } from "@/hooks/useAnalytics";
import { trpc } from "@/lib/trpc";
import type { SimulationOption } from "@shared/loan-types";
import { ArrowRight, ArrowLeft, AlertTriangle, Leaf, Globe } from "lucide-react";

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Resultado() {
  const [, navigate] = useLocation();
  const { track } = useAnalytics();
  const createProposalMutation = trpc.loan.createProposal.useMutation();

  const [simulationData, setSimulationData] = useState<{
    options: SimulationOption[];
    amount: number;
  } | null>(null);

  useEffect(() => {
    track("view_result");
    try {
      const stored = sessionStorage.getItem("simulation_result");
      if (stored) {
        setSimulationData(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, [track]);

  const handleStartProposal = (option: SimulationOption) => {
    track("start_proposal", { term: option.term, amount: simulationData?.amount });

    const utmStr = sessionStorage.getItem("simulation_utm");
    const utm = utmStr ? JSON.parse(utmStr) : {};

    createProposalMutation.mutate(
      {
        amount: simulationData?.amount || 0,
        term: option.term,
        monthlyRate: option.monthlyRate,
        cetAnnual: option.cetAnnual,
        installment: option.installment,
        ...utm,
      },
      {
        onSuccess: (data) => {
          sessionStorage.setItem("proposal_id", String(data.proposalId));
          sessionStorage.setItem("selected_option", JSON.stringify(option));
          navigate("/proposta");
        },
      }
    );
  };

  if (!simulationData) {
    return (
      <Layout>
        <div className="container py-20 text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Nenhuma simulação encontrada</h1>
          <p className="text-muted-foreground">Faça uma simulação primeiro para ver as condições.</p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao simulador
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-3 mb-10">
              <div className="flex justify-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                  <Globe className="h-3 w-3 mr-1" /> Crédito ODS
                </Badge>
                <Badge variant="outline" className="text-xs font-medium px-3 py-1 border-primary/30 text-primary">
                  <Leaf className="h-3 w-3 mr-1" /> Impacto positivo
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Condições para seu crédito sustentável de{" "}
                <span className="text-primary">{formatCurrency(simulationData.amount)}</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha o prazo que melhor se adapta ao seu planejamento. Seu crédito contribui para os 
                Objetivos de Desenvolvimento Sustentável da ONU.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {simulationData.options.map((option, index) => {
                const isRecommended = index === 1;
                return (
                  <Card
                    key={option.term}
                    className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      isRecommended
                        ? "border-primary shadow-lg scale-[1.02]"
                        : "hover:border-primary/30"
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                        Mais escolhido
                      </div>
                    )}
                    <CardContent className={`p-6 space-y-5 ${isRecommended ? "pt-10" : ""}`}>
                      <div className="text-center space-y-1">
                        <p className="text-sm text-muted-foreground font-medium">{option.term}x de</p>
                        <p className="text-3xl font-bold text-foreground">{formatCurrency(option.installment)}</p>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-dashed">
                          <span className="text-muted-foreground">Taxa a.m.</span>
                          <span className="font-semibold text-foreground">{option.monthlyRate.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-dashed">
                          <span className="text-muted-foreground">CET a.a.</span>
                          <span className="font-semibold text-foreground">{option.cetAnnual.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-muted-foreground">Total</span>
                          <span className="font-semibold text-foreground">{formatCurrency(option.totalAmount)}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleStartProposal(option)}
                        className="w-full font-semibold"
                        variant={isRecommended ? "default" : "outline"}
                        disabled={createProposalMutation.isPending}
                      >
                        {createProposalMutation.isPending ? "Criando..." : "Iniciar proposta"}
                        {!createProposalMutation.isPending && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* ODS Impact Banner */}
            <div className="bg-primary/5 rounded-lg p-4 md:p-5 flex items-start gap-3 mb-6">
              <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Crédito de impacto.</strong> Ao contratar com o Empréstimo Social, 
                você contribui para a Agenda 2030 da ONU. Projetos de energia solar, agricultura familiar e 
                empreendedorismo social podem ter condições diferenciadas.
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Simulação ilustrativa.</strong> Os valores apresentados são estimativas e podem variar 
                conforme a análise de crédito. As taxas finais serão confirmadas após a avaliação do seu perfil. 
                A aprovação não é garantida.
              </p>
            </div>

            <div className="text-center mt-6">
              <Button variant="ghost" onClick={() => navigate("/")} className="text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Refazer simulação
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
