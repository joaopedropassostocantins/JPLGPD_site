import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  FileText,
  Search,
  GraduationCap,
  Scale,
  Shield,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD";

const SERVICES = [
  {
    icon: Users,
    title: "DPO as a Service",
    subtitle: "Encarregado de Dados terceirizado",
    color: "text-blue-600 bg-blue-600/10",
    desc: "Atuacao como Encarregado de Dados Pessoais (DPO) terceirizado, conforme Art. 41 da LGPD. Designacao formal, canal de atendimento ao titular e interlocucao com a ANPD.",
    items: [
      "Designacao formal como Encarregado (Art. 41 LGPD)",
      "Canal de atendimento aos titulares de dados",
      "Interlocucao com a ANPD quando necessario",
      "Monitoramento de obrigacoes legais",
      "Suporte consultivo mensal incluido",
    ],
  },
  {
    icon: FileText,
    title: "Documentacao LGPD",
    subtitle: "Politicas, RIPD e ROPA",
    color: "text-emerald-600 bg-emerald-600/10",
    desc: "Elaboracao de toda a documentacao exigida pela LGPD: politica de privacidade, termos de uso, RIPD (Relatorio de Impacto), ROPA e contratos de processamento.",
    items: [
      "Politica de Privacidade e Aviso de Cookies",
      "Termos de Uso adaptados ao seu negocio",
      "RIPD (Relatorio de Impacto a Protecao de Dados)",
      "ROPA (Registro de Atividades de Tratamento)",
      "Contratos com operadores de dados (DPA)",
    ],
  },
  {
    icon: Search,
    title: "Auditoria e Conformidade",
    subtitle: "Diagnostico e gap analysis",
    color: "text-amber-600 bg-amber-600/10",
    desc: "Diagnostico de maturidade em privacidade, identificacao de gaps de conformidade, plano de acao priorizado e acompanhamento de implementacao de controles.",
    items: [
      "Diagnostico inicial de maturidade LGPD",
      "Gap analysis com base nos requisitos legais",
      "Plano de acao priorizado por risco",
      "Mapeamento de fluxos de dados pessoais",
      "Relatorio executivo com recomendacoes",
    ],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    subtitle: "Capacitacao de equipes",
    color: "text-purple-600 bg-purple-600/10",
    desc: "Capacitacao pratica de equipes sobre LGPD, boas praticas de protecao de dados, resposta a incidentes e construcao de cultura de privacidade na organizacao.",
    items: [
      "Treinamento LGPD basico para toda a equipe",
      "Workshop avancado para times de TI e juridico",
      "Simulacao de resposta a incidentes de seguranca",
      "Construcao de cultura de privacidade",
      "Material didatico incluso",
    ],
  },
];

const PILARES = [
  {
    icon: Scale,
    title: "1. Lei",
    desc: "Mapeamento das obrigacoes legais aplicaveis. Analise de bases legais e finalidades.",
    color: "text-blue-600 bg-blue-600/10",
  },
  {
    icon: ClipboardCheck,
    title: "2. Regras",
    desc: "Criacao de politicas, procedimentos e documentos internos de privacidade.",
    color: "text-emerald-600 bg-emerald-600/10",
  },
  {
    icon: Shield,
    title: "3. Conformidade",
    desc: "Controles, auditorias e melhoria continua. DPO e canal de atendimento.",
    color: "text-amber-600 bg-amber-600/10",
  },
  {
    icon: Users,
    title: "4. Titular",
    desc: "Canal de atendimento, gestao de solicitacoes e comunicacao com a ANPD.",
    color: "text-purple-600 bg-purple-600/10",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Nossos Servicos</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Solucoes modulares e estruturadas em 4 pilares para todas as etapas da adequacao a LGPD.
          </p>
          <div className="pt-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-emerald-600 hover:bg-emerald-700 font-semibold px-8 h-12">
                Solicitar diagnostico gratuito <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 4 PILARES */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Metodologia 4 Pilares</h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Nossa abordagem cobre todas as dimensoes da conformidade com a LGPD.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILARES.map((p) => (
              <div key={p.title} className="flex flex-col gap-2 p-5 rounded-xl border bg-background">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${p.color}`}>
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICOS DETALHADOS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="space-y-8">
            {SERVICES.map((service) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-12 w-12 rounded-xl flex items-center justify-center ${service.color}`}
                        >
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="font-semibold">
                          Saber mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PLANO */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Plano Essencial</h2>
            <p className="text-muted-foreground text-lg">
              Tudo o que sua empresa precisa para iniciar a adequacao a LGPD.
            </p>

            <Card className="border-primary shadow-lg text-left">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2 text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">R$ 150</span>
                    <span className="text-muted-foreground">/mes nos primeiros 12 meses</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    R$ 300/mes nos meses 13 a 24 · Contrato de 24 meses · Total: R$ 5.400
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  {[
                    "DPO / Encarregado terceirizado (Art. 41 LGPD)",
                    "Designacao formal como Encarregado",
                    "Politica de privacidade e termos de uso",
                    "RIPD simplificado e ROPA",
                    "Canal de atendimento ao titular",
                    "Suporte consultivo mensal",
                    "Treinamento inicial da equipe",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-12 text-base font-semibold">
                    Solicitar proposta e contrato <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground text-center">
                  Sem compromisso para o diagnostico inicial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
