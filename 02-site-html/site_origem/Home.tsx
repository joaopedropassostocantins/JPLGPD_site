import { useEffect, useState, useMemo } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useUTM } from "@/hooks/useUTM";
import { FAQ_ITEMS, ODS_GOALS } from "@shared/loan-types";
import {
  Leaf, Globe, Users, Sprout, ArrowRight, CheckCircle, Star,
  Search, FileText, Banknote, AlertTriangle, Heart, TrendingUp,
  Sun, HandHeart, Target, BookOpen
} from "lucide-react";

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Home() {
  const [, navigate] = useLocation();
  const { track } = useAnalytics();
  const utm = useUTM();
  const [amount, setAmount] = useState(3000);
  const [term, setTerm] = useState("12");
  const simulateMutation = trpc.loan.simulate.useMutation();

  useEffect(() => {
    track("view_landing");
  }, [track]);

  const handleSimulate = () => {
    track("simulate", { amount, term: parseInt(term) });
    simulateMutation.mutate(
      { amount, terms: [6, 12, 18] },
      {
        onSuccess: (data) => {
          sessionStorage.setItem("simulation_result", JSON.stringify(data));
          sessionStorage.setItem("simulation_amount", String(amount));
          sessionStorage.setItem("simulation_utm", JSON.stringify(utm));
          navigate("/resultado");
        },
      }
    );
  };

  const quickEstimate = useMemo(() => {
    const t = parseInt(term);
    let rate: number;
    if (amount <= 1000) rate = 0.0499;
    else if (amount <= 3000) rate = 0.0449;
    else if (amount <= 5000) rate = 0.0349;
    else rate = 0.0299;

    if (t <= 6) rate -= 0.005;
    else if (t <= 12) { /* no change */ }
    else if (t <= 18) rate += 0.003;
    else rate += 0.006;

    rate = Math.max(0.0249, Math.min(0.0599, rate));
    const factor = Math.pow(1 + rate, t);
    const pmt = amount * (rate * factor) / (factor - 1);
    return Math.round(pmt * 100) / 100;
  }, [amount, term]);

  return (
    <Layout>
      {/* Hero + Simulator */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663335220356/nZnphsVfRVzvUBDU.png')" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/85 to-white/60" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                  <Globe className="h-3 w-3 mr-1" /> Alinhado aos ODS da ONU
                </Badge>
                <Badge variant="outline" className="text-xs font-medium px-3 py-1 border-primary/30 text-primary">
                  <Leaf className="h-3 w-3 mr-1" /> Agenda 2030
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-foreground leading-tight">
                Crédito que{" "}
                <span className="text-primary">transforma vidas</span>{" "}
                e protege o planeta
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Empréstimos de R$ 300 a R$ 10.000 alinhados aos Objetivos de Desenvolvimento Sustentável da ONU. 
                Inclusão financeira, taxas justas e impacto positivo na sociedade.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary" /> Sem CPF para simular
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary" /> Crédito de impacto
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-primary" /> 100% online
                </span>
              </div>

              {/* ODS badges inline */}
              <div className="flex gap-1.5 flex-wrap pt-2">
                {ODS_GOALS.filter(o => [1, 8, 10, 17].includes(o.number)).map((ods) => (
                  <span
                    key={ods.number}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                    style={{ backgroundColor: ods.color }}
                    title={ods.title}
                  >
                    ODS {ods.number}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulator Card */}
            <Card id="simulador" className="shadow-xl border-primary/10">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-foreground">Simule seu crédito sustentável</h2>
                  <p className="text-sm text-muted-foreground">Sem compromisso e sem precisar de CPF</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <label className="text-sm font-medium text-foreground">Valor desejado</label>
                      <span className="text-2xl font-bold text-primary">{formatCurrency(amount)}</span>
                    </div>
                    <Slider
                      value={[amount]}
                      onValueChange={(v) => setAmount(v[0])}
                      min={300}
                      max={10000}
                      step={100}
                      className="w-full"
                      aria-label="Valor do empréstimo"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>R$ 300</span>
                      <span>R$ 10.000</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Prazo</label>
                    <Select value={term} onValueChange={setTerm}>
                      <SelectTrigger aria-label="Prazo em meses">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 meses</SelectItem>
                        <SelectItem value="12">12 meses</SelectItem>
                        <SelectItem value="18">18 meses</SelectItem>
                        <SelectItem value="24">24 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 space-y-1">
                  <p className="text-sm text-muted-foreground">Parcela estimada</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatCurrency(quickEstimate)}
                    <span className="text-base font-normal text-muted-foreground">/mês</span>
                  </p>
                </div>

                <Button
                  onClick={handleSimulate}
                  className="w-full h-12 text-base font-semibold"
                  disabled={simulateMutation.isPending}
                >
                  {simulateMutation.isPending ? "Calculando..." : "Ver condições"}
                  {!simulateMutation.isPending && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  <AlertTriangle className="inline h-3 w-3 mr-1" />
                  Valores ilustrativos e sujeitos à análise de crédito. As taxas podem variar conforme seu perfil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <Badge variant="outline" className="text-xs font-medium px-3 py-1 border-primary/30 text-primary mb-2">
              <Target className="h-3 w-3 mr-1" /> Objetivos de Desenvolvimento Sustentável
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Crédito alinhado à Agenda 2030 da ONU
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              As Nações Unidas visam, através da Agenda 2030, aumentar o financiamento para o desenvolvimento sustentável, 
              incentivando o setor privado a oferecer produtos de crédito que ajudem a erradicar a pobreza e proteger o planeta.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                ods: 8,
                icon: TrendingUp,
                title: "ODS 8 — Trabalho Decente",
                desc: "Linhas de crédito facilitadas para empreendimentos que cumprem metas de sustentabilidade, com foco em inclusão financeira, igualdade de gênero e negócios sociais.",
                color: "#A21942",
              },
              {
                ods: 10,
                icon: Users,
                title: "ODS 10 — Redução das Desigualdades",
                desc: "Inspirados no modelo de microcrédito de Muhammad Yunus (Grameen Bank), referência na meta ODS 8.10, democratizamos o acesso ao crédito para populações de baixa renda.",
                color: "#DD1367",
              },
              {
                ods: 17,
                icon: HandHeart,
                title: "ODS 17 — Parcerias Globais",
                desc: "Bancos de fomento como o BNDES e programas como o Crédito ODS da Trê Investimentos financiam projetos com selos verdes e de impacto social, incluindo energia solar e apoio a pequenos produtores.",
                color: "#19486A",
              },
            ].map((item) => (
              <Card key={item.ods} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-1.5" style={{ backgroundColor: item.color }} />
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-11 w-11 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.ods}
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground">Inspiração: Muhammad Yunus e o Grameen Bank</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                O Nobel da Paz Muhammad Yunus revolucionou o microcrédito ao criar o Grameen Bank em Bangladesh, 
                provando que pessoas de baixa renda — especialmente mulheres — são excelentes pagadoras quando recebem 
                oportunidade e confiança. Esse modelo é referência na meta ODS 8.10 da ONU e inspira nossa missão 
                de democratizar o acesso ao crédito no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que escolher o Empréstimo Social?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Crédito responsável com impacto positivo na sociedade e no meio ambiente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Impacto Social", desc: "Cada empréstimo contribui para os ODS da ONU. Seu crédito gera impacto positivo na sociedade e no meio ambiente." },
              { icon: Sprout, title: "Crédito Sustentável", desc: "Condições diferenciadas para projetos de energia solar, agricultura familiar e negócios de impacto social." },
              { icon: Heart, title: "Inclusão Financeira", desc: "Inspirados no microcrédito de Yunus, democratizamos o acesso ao crédito para quem mais precisa." },
              { icon: Sun, title: "Transparência Total", desc: "Sem letras miúdas. Taxas, CET e condições sempre visíveis. Alinhado ao ODS 17 de parcerias transparentes." },
            ].map((item) => (
              <Card key={item.title} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Simples em 3 passos
            </h2>
            <p className="text-muted-foreground text-lg">
              Do simulador ao crédito sustentável na sua conta, tudo de forma rápida e segura.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, icon: Search, title: "Simule e escolha", desc: "Use nosso simulador para encontrar o valor e prazo ideais. Sem CPF, sem compromisso. Crédito alinhado aos ODS." },
              { step: 2, icon: FileText, title: "Preencha a proposta", desc: "Informe seus dados em um formulário simples e seguro. Projetos de impacto social podem ter condições especiais." },
              { step: 3, icon: Banknote, title: "Receba o crédito", desc: "Após a aprovação, o dinheiro é depositado na sua conta. Seu empréstimo contribui para a Agenda 2030 da ONU." },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossas Condições
              </h2>
              <p className="text-muted-foreground text-lg">
                Transparência é um dos pilares dos ODS. Você merece saber exatamente o que está contratando.
              </p>
            </div>
            <Card className="border-primary/10">
              <CardContent className="p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Taxa de juros</p>
                    <p className="text-2xl font-bold text-foreground">2,49% a 5,99% <span className="text-base font-normal text-muted-foreground">a.m.</span></p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">CET estimado</p>
                    <p className="text-2xl font-bold text-foreground">37% a 104% <span className="text-base font-normal text-muted-foreground">a.a.</span></p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Valores</p>
                    <p className="text-2xl font-bold text-foreground">R$ 300 a R$ 10.000</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Prazo de análise</p>
                    <p className="text-2xl font-bold text-foreground">Até 3 dias úteis</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As taxas e condições variam conforme o perfil de crédito do solicitante, valor e prazo escolhidos. 
                    O CET (Custo Efetivo Total) inclui juros, IOF e demais encargos. 
                    Consulte nossa{" "}
                    <a href="/transparencia" className="text-primary hover:underline font-medium">
                      Política de Crédito, ODS e Transparência
                    </a>{" "}
                    para mais detalhes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Impact Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Histórias de impacto
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja como o crédito sustentável transforma vidas e comunidades.
            </p>
            <p className="text-xs text-muted-foreground">
              * Depoimentos ilustrativos para fins de demonstração.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria S.",
                city: "São Paulo, SP",
                text: "Com o crédito do Empréstimo Social, instalei painéis solares na minha casa. Reduzi a conta de luz em 80% e contribuo para o ODS 7 — Energia Limpa.",
                rating: 5,
                tag: "Energia Solar",
                tagColor: "#FCC30B",
              },
              {
                name: "Carlos R.",
                city: "Belo Horizonte, MG",
                text: "Financiei meu pequeno negócio de agricultura orgânica. As condições foram claras e o processo transparente. Meu negócio gera emprego na comunidade.",
                rating: 5,
                tag: "Agricultura Familiar",
                tagColor: "#3F7E44",
              },
              {
                name: "Ana L.",
                city: "Curitiba, PR",
                text: "Como empreendedora social, consegui crédito para expandir minha cooperativa de costura. Hoje empregamos 12 mulheres da comunidade.",
                rating: 5,
                tag: "Empreendedorismo Feminino",
                tagColor: "#DD1367",
              },
            ].map((t) => (
              <Card key={t.name} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white"
                    style={{ backgroundColor: t.tagColor }}
                  >
                    {t.tag}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed italic">"{t.text}"</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            * Os depoimentos acima são exemplos ilustrativos e não representam clientes reais.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground text-lg">
                Tire suas dúvidas sobre o Empréstimo Social e os ODS.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Faça parte da transformação
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Seu crédito pode gerar impacto positivo. Simule agora e descubra como contribuir 
            para os Objetivos de Desenvolvimento Sustentável da ONU.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold px-8 h-12"
            onClick={() => {
              document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Simular agora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex justify-center gap-2 pt-4">
            {ODS_GOALS.filter(o => [1, 5, 8, 10, 13, 17].includes(o.number)).map((ods) => (
              <span
                key={ods.number}
                className="inline-flex items-center justify-center h-8 w-8 rounded text-xs font-bold text-white border border-white/20"
                style={{ backgroundColor: ods.color }}
                title={ods.title}
              >
                {ods.number}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
