import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  FileText,
  Search,
  Users,
  Scale,
  Phone,
  Mail,
  GraduationCap,
  Building2,
  ClipboardCheck,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD";

const FAQ_ITEMS = [
  {
    question: "O que e a LGPD e quem precisa se adequar?",
    answer:
      "A Lei Geral de Protecao de Dados (Lei 13.709/2018) regula o tratamento de dados pessoais no Brasil. Toda organizacao que coleta, armazena ou processa dados pessoais — de clientes, funcionarios ou fornecedores — precisa se adequar, independentemente do porte.",
  },
  {
    question: "O que e um DPO / Encarregado de Dados?",
    answer:
      "O Encarregado de Dados Pessoais (DPO) e o profissional responsavel por atuar como canal de comunicacao entre o controlador, os titulares de dados e a ANPD. A LGPD preve a designacao de um encarregado (Art. 41), cuja obrigatoriedade pode variar conforme o porte e a natureza do tratamento.",
  },
  {
    question: "Como funciona o DPO as a Service?",
    answer:
      "O DPO as a Service e a terceirizacao da funcao de Encarregado. A 4 Pilares atua como DPO terceirizado da sua empresa: fazemos a designacao formal, estruturamos o canal de atendimento ao titular, respondemos solicitacoes e mantemos a interlocucao com a ANPD quando necessario.",
  },
  {
    question: "Quanto custa o Plano Essencial?",
    answer:
      "O Plano Essencial tem contrato de 24 meses, com R$ 150/mes nos primeiros 12 meses (50% de desconto) e R$ 300/mes nos meses 13 a 24. O valor total do contrato e R$ 5.400, com ticket medio efetivo de R$ 225/mes.",
  },
  {
    question: "O que esta incluido no Plano Essencial?",
    answer:
      "O plano inclui: DPO terceirizado com designacao formal, politica de privacidade, termos de uso, RIPD simplificado, ROPA, canal de atendimento ao titular, suporte consultivo mensal e treinamento inicial da equipe.",
  },
  {
    question: "Minha empresa e pequena. Preciso de DPO?",
    answer:
      "Depende. A Resolucao CD/ANPD n. 2/2022 flexibiliza algumas obrigacoes para agentes de tratamento de pequeno porte. No entanto, mesmo empresas pequenas que tratam dados pessoais se beneficiam da estruturacao de boas praticas. Fazemos uma avaliacao caso a caso no diagnostico inicial.",
  },
  {
    question: "A consultoria garante conformidade total com a LGPD?",
    answer:
      "Nao. A adequacao a LGPD e um processo continuo que depende da colaboracao ativa da empresa. Nossa consultoria apoia a implementacao progressiva de boas praticas, documentacao e controles, mas a conformidade plena depende de fatores operacionais do contratante.",
  },
  {
    question: "Como comeco?",
    answer:
      "Entre em contato via WhatsApp ou e-mail para agendar o diagnostico inicial (sem compromisso). Avaliamos a situacao da sua empresa e enviamos uma proposta personalizada com contrato.",
  },
  {
    question: "Posso cancelar o contrato?",
    answer:
      "Sim. O contrato preve clausulas de rescisao com multa proporcional ao tempo restante. Antes do inicio da execucao, aplica-se o direito de arrependimento de 7 dias (CDC). Detalhes completos estarao na proposta contratual.",
  },
  {
    question: "Os dados da minha empresa ficam seguros?",
    answer:
      "Sim. Adotamos medidas tecnicas e organizacionais de seguranca, incluindo criptografia e controles de acesso. Nosso proprio tratamento de dados segue as diretrizes da LGPD. Consulte nossa Politica de Privacidade para mais detalhes.",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "4 Pilares LGPD — DPO Certificado | Consultoria em Protecao de Dados";
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-tight">
                Privacidade e{" "}
                <span className="text-blue-400">governanca</span>{" "}
                para sua empresa
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
                Consultoria LGPD estruturada em 4 pilares: Lei, Regras, Conformidade e Direitos do
                Titular. DPO terceirizado, documentacao completa e suporte continuo para PMEs.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> DPO / Encarregado
                  terceirizado
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> Documentacao LGPD completa
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> Suporte remoto continuo
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="text-base font-semibold px-8 h-12 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Solicitar diagnostico inicial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base font-semibold px-8 h-12 border-slate-500 text-slate-200 hover:bg-slate-800"
                  >
                    Receber proposta e contrato
                  </Button>
                </a>
              </div>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardContent className="p-6 md:p-8 space-y-5">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-white">
                    Sua empresa precisa de adequacao?
                  </h2>
                  <p className="text-sm text-slate-400">Responda rapidamente e descubra</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Search className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                    Coleta dados pessoais de clientes, funcionarios ou fornecedores?
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    Possui politica de privacidade publicada e atualizada?
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                    Tem canal de atendimento ao titular de dados?
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                    Designou um Encarregado (DPO) conforme a LGPD?
                  </li>
                </ul>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Se respondeu "nao" a qualquer item, sua empresa pode estar exposta a riscos
                  regulatorios e sancoes da ANPD.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-12 text-base font-semibold bg-emerald-600 hover:bg-emerald-700">
                    Falar com um consultor <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que sua empresa precisa se adequar?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A LGPD (Lei 13.709/2018) e obrigatoria para todas as organizacoes que tratam dados
              pessoais. Improvisar a conformidade pode custar caro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Scale,
                title: "Sancoes Administrativas",
                desc: "Multas de ate 2% do faturamento bruto (limitadas a R$ 50 milhoes por infracao), advertencias e bloqueio de dados.",
              },
              {
                icon: Building2,
                title: "Risco Reputacional",
                desc: "Incidentes de seguranca e vazamentos de dados geram exposicao publica, perda de confianca e danos a marca.",
              },
              {
                icon: ClipboardCheck,
                title: "Exigencias Contratuais",
                desc: "Grandes empresas e orgaos publicos ja exigem conformidade LGPD de seus fornecedores e parceiros.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCAO 4 PILARES */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Solucao em 4 Pilares
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma metodologia estruturada que cobre todas as dimensoes da adequacao a LGPD.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scale,
                title: "1. Lei",
                desc: "Mapeamento das obrigacoes legais aplicaveis ao seu negocio. Analise de bases legais, finalidades e fluxos de tratamento.",
                color: "text-blue-600 bg-blue-600/10",
              },
              {
                icon: ClipboardCheck,
                title: "2. Regras",
                desc: "Criacao de politicas, procedimentos e documentos internos. Politica de privacidade, RIPD, ROPA e normas internas.",
                color: "text-emerald-600 bg-emerald-600/10",
              },
              {
                icon: Shield,
                title: "3. Conformidade",
                desc: "Implementacao de controles, auditorias e melhoria continua. Designacao do encarregado (DPO) e canal de atendimento ao titular.",
                color: "text-amber-600 bg-amber-600/10",
              },
              {
                icon: Users,
                title: "4. Titular",
                desc: "Estruturacao do canal de atendimento aos titulares de dados. Gestao de solicitacoes, prazos legais e comunicacao com a ANPD.",
                color: "text-purple-600 bg-purple-600/10",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICOS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Servicos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Solucoes modulares para cada etapa da adequacao.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "DPO as a Service",
                desc: "Atuacao como Encarregado de Dados Pessoais (DPO) terceirizado. Designacao formal, canal de atendimento ao titular e interlocucao com a ANPD.",
              },
              {
                icon: FileText,
                title: "Documentacao LGPD",
                desc: "Elaboracao de politica de privacidade, RIPD (Relatorio de Impacto), ROPA (Registro de Atividades de Tratamento), termos de uso e contratos de processamento.",
              },
              {
                icon: Search,
                title: "Auditoria e Conformidade",
                desc: "Diagnostico de maturidade em privacidade, gap analysis, plano de acao e acompanhamento de implementacao de controles.",
              },
              {
                icon: GraduationCap,
                title: "Treinamentos",
                desc: "Capacitacao de equipes sobre LGPD, boas praticas de protecao de dados, resposta a incidentes e cultura de privacidade.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
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

      {/* DIFERENCIAIS */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que a 4 Pilares?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Abordagem Multidisciplinar",
                desc: "Unimos visao juridica e operacional para entregar adequacao pratica, nao apenas teorica.",
              },
              {
                title: "Linguagem Clara",
                desc: "Traduzimos a complexidade regulatoria em orientacoes objetivas e aplicaveis ao dia a dia.",
              },
              {
                title: "Suporte Remoto",
                desc: "Atendimento agil via WhatsApp, e-mail e reunioes online. Sem burocracia.",
              },
              {
                title: "Escopo para PME",
                desc: "Planos acessiveis, pensados para o porte e a realidade de pequenas e medias empresas.",
              },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PLANO */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Plano Essencial</h2>
            <p className="text-muted-foreground text-lg">
              Tudo o que sua empresa precisa para iniciar a adequacao a LGPD.
            </p>

            <Card className="border-primary shadow-lg">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">R$ 150</span>
                    <span className="text-muted-foreground">/mes nos primeiros 12 meses</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    R$ 300/mes nos meses 13 a 24 · Contrato de 24 meses · Total: R$ 5.400
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-left">
                  {[
                    "DPO / Encarregado terceirizado",
                    "Designacao formal conforme Art. 41 da LGPD",
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
                  Proposta detalhada e contrato enviados apos diagnostico inicial. Sem compromisso
                  para o diagnostico.
                </p>
              </CardContent>
            </Card>
          </div>
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
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border rounded-lg px-4"
                >
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

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Comece a adequacao da sua empresa hoje
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            O diagnostico inicial e sem compromisso. Entenda sua situacao e receba uma proposta
            personalizada para o seu negocio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-base font-semibold px-8 h-12 bg-emerald-600 hover:bg-emerald-700"
              >
                <Phone className="mr-2 h-4 w-4" /> Falar no WhatsApp
              </Button>
            </a>
            <a href="mailto:contato@4pilaresconsultoria.com.br">
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-8 h-12 border-slate-500 text-slate-200 hover:bg-slate-800"
              >
                <Mail className="mr-2 h-4 w-4" /> Enviar e-mail
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
