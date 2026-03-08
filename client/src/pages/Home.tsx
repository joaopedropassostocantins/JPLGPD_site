import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import {
  FileText, BookOpen, CheckCircle, Users, ArrowRight,
  Phone, Mail, MapPin, Scale, Zap, Lock, Globe, Layers,
  Clock, Shield, Award, MessageCircle
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5563984381782?text=Quero%20contratar%20DPO%20por%20R%24299";

const PILARES = [
  {
    title: "LEI",
    icon: Scale,
    color: "bg-[#0f172a]",
    borderColor: "border-[#0f172a]",
    textColor: "text-[#0f172a]",
    desc: "Base Legal e Legislação Aplicável",
    items: [
      "Lei 13.709/2018 (LGPD) — Proteção de dados pessoais",
      "Lei 12.965/2014 (Marco Civil) — Direitos digitais",
      "Lei 15.211/2025 (Estatuto Digital) — Proteção de menores",
    ],
    deliverables: [
      "Análise de aplicabilidade legal",
      "Identificação de bases legais",
      "Mapeamento de obrigações regulatórias",
      "Monitoramento de atualizações legislativas",
    ],
  },
  {
    title: "REGRAS",
    icon: BookOpen,
    color: "bg-[#065f46]",
    borderColor: "border-[#065f46]",
    textColor: "text-[#065f46]",
    desc: "Governança e Processos Operacionais",
    items: [
      "Políticas de Privacidade e Termos de Uso",
      "Procedimentos Operacionais Padrão (POPs)",
      "Fluxos de trabalho e responsabilidades",
      "Framework de governança corporativa",
    ],
    deliverables: [
      "RIPD, ROPA, LIA, DIA (relatórios técnicos)",
      "Políticas e procedimentos documentados",
      "Contratos DPA/NDA",
      "Matriz de responsabilidades",
    ],
  },
  {
    title: "CONFORMIDADE",
    icon: CheckCircle,
    color: "bg-[#ea580c]",
    borderColor: "border-[#ea580c]",
    textColor: "text-[#ea580c]",
    desc: "Certificação e Adequação Contínua",
    items: [
      "DPO Certificado e registrado ANPD",
      "Auditorias periódicas (GAP Analysis)",
      "Assessment de maturidade",
      "Planos de correção e melhoria contínua",
    ],
    deliverables: [
      "Certificação DPO com registro ANPD",
      "Relatórios de auditoria",
      "Planos de ação corretiva",
      "Treinamentos e capacitação",
    ],
  },
  {
    title: "TITULAR",
    icon: Users,
    color: "bg-[#7c3aed]",
    borderColor: "border-[#7c3aed]",
    textColor: "text-[#7c3aed]",
    desc: "Direitos e Transparência com Titulares",
    items: [
      "Canal de comunicação com titulares",
      "Gestão de requisições (ANPD + titulares)",
      "Transparência e accountability",
      "Portal de privacidade público",
    ],
    deliverables: [
      "Canal de atendimento titulares (e-mail/formulário)",
      "Processo de resposta a requisições",
      "Portal de privacidade transparente",
      "Gestão de incidentes e notificações",
    ],
  },
];

const PLANS = [
  {
    name: "ESSENCIAL",
    price: "R$ 997",
    highlight: false,
    badge: null,
    size: "Até 10 colaboradores",
    features: [
      "LEI Básico",
      "REGRAS Essencial",
      "CONFORMIDADE — DPO Online",
      "TITULAR — Canal básico",
      "RIPD + ROPA",
      "Política de Privacidade",
      "2 treinamentos online (2h)",
      "Suporte e-mail (48h)",
    ],
    cta: "Contratar",
    ctaLink: WHATSAPP_LINK,
  },
  {
    name: "PROFISSIONAL",
    price: "R$ 1.997",
    highlight: true,
    badge: "⭐ POPULAR",
    size: "11–50 colaboradores",
    features: [
      "LEI Completo",
      "REGRAS Completo",
      "CONFORMIDADE — DPO Dedicado",
      "TITULAR — Canal + Workflow",
      "RIPD + ROPA + LIA",
      "Todas as políticas",
      "4 treinamentos (online + 1 presencial 8h)",
      "Suporte e-mail + WhatsApp (24h)",
      "1 Auditoria/ano",
      "5h jurídicas incluídas",
    ],
    cta: "Contratar",
    ctaLink: WHATSAPP_LINK,
  },
  {
    name: "EMPRESARIAL",
    price: "R$ 3.997",
    highlight: false,
    badge: null,
    size: "51–200 colaboradores",
    features: [
      "LEI Completo + Assessoria",
      "REGRAS Avançado",
      "CONFORMIDADE — DPO + Backup",
      "TITULAR — Portal completo",
      "RIPD + ROPA + LIA + DIA",
      "Todas as políticas + Contratos DPA",
      "Treinamentos ilimitados",
      "Suporte prioritário (4h)",
      "2 Auditorias/ano",
      "15h jurídicas incluídas",
      "Estatuto Digital incluído",
    ],
    cta: "Contratar",
    ctaLink: WHATSAPP_LINK,
  },
  {
    name: "ENTERPRISE",
    price: "Personalizado",
    highlight: false,
    badge: "SOB CONSULTA",
    size: "200+ colaboradores",
    features: [
      "LEI Dedicado",
      "REGRAS Customizado",
      "CONFORMIDADE — DPO Full Time",
      "TITULAR — Múltiplos canais",
      "Todos os relatórios completos",
      "Todas as políticas customizadas",
      "Treinamentos ilimitados + presenciais",
      "Suporte 24/7 dedicado",
      "Auditorias trimestrais",
      "Suporte jurídico ilimitado",
      "Estatuto Digital completo",
    ],
    cta: "Consultar",
    ctaLink: WHATSAPP_LINK,
  },
];

const DIFERENCIAIS = [
  {
    icon: Layers,
    title: "Metodologia 4 Pilares",
    desc: "Abordagem estruturada baseada em Lei, Regras, Conformidade e Titular.",
  },
  {
    icon: Award,
    title: "Melhor Preço",
    desc: "R$ 299/mês primeiros 6 meses com DPO certificado incluído.",
  },
  {
    icon: Zap,
    title: "Adequação Rápida",
    desc: "30-90 dias para conformidade completa com processos ágeis.",
  },
  {
    icon: Lock,
    title: "Privacidade Total",
    desc: "NÃO acessamos seus dados. Trabalhamos apenas com arquitetura.",
  },
  {
    icon: Shield,
    title: "Equipe Multidisciplinar",
    desc: "Jurídico + TI + Acadêmico integrados em uma única solução.",
  },
  {
    icon: Globe,
    title: "Atendimento Nacional",
    desc: "100% remoto em todo o Brasil, com sede em Palmas-TO.",
  },
];

const TIMELINE = [
  { step: "01", title: "Contratação", desc: "Escolha seu plano e assine o contrato digital. Sem taxa de adesão." },
  { step: "02", title: "Diagnóstico", desc: "GAP Analysis completo: mapeamos onde sua empresa está e onde precisa chegar." },
  { step: "03", title: "Planejamento", desc: "Elaboramos um plano de adequação personalizado com cronograma detalhado." },
  { step: "04", title: "Implementação", desc: "Executamos o plano: documentação, treinamentos, canais e controles técnicos." },
  { step: "05", title: "Governança", desc: "Monitoramento contínuo, atualizações legais e suporte permanente." },
];

const FAQ_ITEMS = [
  {
    question: "O que é DPO (Data Protection Officer)?",
    answer: "O DPO é o encarregado de proteção de dados exigido pela LGPD para empresas que tratam dados pessoais em larga escala ou dados sensíveis. Ele é o elo entre a empresa, os titulares de dados e a ANPD. Na modalidade 'DPO as a Service', você contrata este serviço externamente, com toda a expertise necessária a um custo acessível.",
  },
  {
    question: "Minha empresa é obrigada a ter um DPO?",
    answer: "A LGPD prevê que empresas que realizam tratamento de dados pessoais em grande escala, dados sensíveis ou de menores precisam designar um DPO. Mesmo quando não obrigatório, ter um DPO demonstra maturidade e reduz riscos de multas (até 2% do faturamento, limitado a R$ 50 milhões por infração).",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer: "Todos os planos incluem os 4 pilares (Lei, Regras, Conformidade, Titular). A diferença está na profundidade: o Essencial cobre empresas menores com documentação básica; o Profissional inclui DPO dedicado e auditoria anual; o Empresarial adiciona suporte prioritário e Estatuto Digital; o Enterprise oferece suporte 24/7 e atendimento totalmente personalizado.",
  },
  {
    question: "O que é a promoção de R$ 299/mês?",
    answer: "É nossa oferta de lançamento para o Plano Essencial: R$ 299/mês pelos primeiros 6 meses (depois R$ 997/mês). Contrato de 12 meses, sem taxa de adesão, com garantia de 7 dias. Válida até 31/03/2026.",
  },
  {
    question: "Em quanto tempo minha empresa estará adequada?",
    answer: "Com nossa metodologia ágil, empresas de pequeno e médio porte alcançam conformidade básica em 30 dias e conformidade completa em 90 dias. Para grandes empresas (Enterprise), o prazo é definido no planejamento personalizado.",
  },
  {
    question: "O que é o Estatuto Digital (Lei 15.211/2025)?",
    answer: "É a lei que reforça a proteção de crianças e adolescentes no ambiente digital, sancionada em 2025. Empresas que tratam dados de menores precisam de adequação específica. Os planos Empresarial e Enterprise já incluem esta adequação.",
  },
  {
    question: "Vocês têm suporte jurídico para processos na ANPD?",
    answer: "Sim. Contamos com escritório de advocacia vinculado (OAB-TO) que atua na defesa em processos administrativos na ANPD e litígios judiciais. Os planos Profissional e superiores incluem horas jurídicas mensais.",
  },
  {
    question: "Posso cancelar o contrato?",
    answer: "O contrato é de 12 meses. Após este período, cancelamento sem multa com aviso prévio de 30 dias. Além disso, oferecemos garantia de 7 dias corridos: se não ficar satisfeito nos primeiros 7 dias, devolvemos o valor integral.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"mensal" | "anual">("mensal");

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white rounded-full px-4 py-3 shadow-lg transition-all hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold hidden sm:inline">R$ 299/mês</span>
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div>
            <div className="text-xl font-bold text-[#0f172a]">4 PILARES LGPD</div>
            <div className="text-xs text-muted-foreground hidden sm:block">Lei • Regras • Conformidade • Titular</div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#pilares" className="text-sm hover:text-primary transition">Pilares</a>
            <a href="#planos" className="text-sm hover:text-primary transition">Planos</a>
            <a href="#sobre" className="text-sm hover:text-primary transition">Sobre</a>
            <a href="#faq" className="text-sm hover:text-primary transition">FAQ</a>
            <Link href="/contato" className="text-sm hover:text-primary transition">Contato</Link>
          </nav>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          >
            Contratar Agora
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0f172a] to-[#1e3a8a] text-white py-20 md:py-32">
        <div className="container text-center space-y-6">
          <Badge className="bg-orange-600 hover:bg-orange-600 text-white border-0 text-sm px-4 py-1">
            🔥 OFERTA LANÇAMENTO: DPO Certificado R$ 299/mês (primeiros 6 meses)
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            4 Pilares LGPD — Adequação Completa à{" "}
            <span className="text-blue-300">Legislação Brasileira</span> de Proteção de Dados
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Solução corporativa baseada em 4 pilares fundamentais: Lei, Regras, Conformidade e
            Direitos do Titular. DPO certificado com suporte jurídico e técnico especializado.
          </p>

          {/* 4 Pilares Visual Grid */}
          <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto pt-4">
            {[
              { emoji: "🏛️", label: "LEI", sub: "Base Legal" },
              { emoji: "📋", label: "REGRAS", sub: "Governança" },
              { emoji: "✅", label: "CONFORMIDADE", sub: "Certificação" },
              { emoji: "👤", label: "TITULAR", sub: "Direitos" },
            ].map((p) => (
              <div key={p.label} className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm border border-white/20">
                <div className="text-2xl mb-1">{p.emoji}</div>
                <div className="font-bold text-sm">{p.label}</div>
                <div className="text-xs text-white/70">{p.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-base font-semibold px-8 h-12" asChild>
              <a href="#planos">💰 Ver Planos e Preços</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-base font-semibold px-8 h-12"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              📅 Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* 4 Pilares Explained */}
      <section id="pilares" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Metodologia: 4 Pilares da Proteção de Dados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estrutura conceitual que garante conformidade total com a legislação brasileira de proteção de dados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILARES.map((pilar) => (
              <Card key={pilar.title} className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
                <div className={`${pilar.color} text-white p-6`}>
                  <pilar.icon className="h-8 w-8 mb-3" />
                  <h3 className="text-2xl font-bold mb-1">PILAR: {pilar.title}</h3>
                  <p className="text-white/80 text-sm">{pilar.desc}</p>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">O QUE ABRANGE:</p>
                      <ul className="space-y-1">
                        {pilar.items.map((item) => (
                          <li key={item} className="text-sm flex gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">O QUE ENTREGAMOS:</p>
                      <ul className="space-y-1">
                        {pilar.deliverables.map((d) => (
                          <li key={d} className="text-sm flex gap-2">
                            <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${pilar.textColor}`} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="bg-orange-600 hover:bg-orange-600 text-white border-0 mb-4 text-sm px-4 py-1">
              🔥 PROMOÇÃO ATÉ 31/03/2026 — R$ 299/mês nos primeiros 6 meses (Plano Essencial)
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos Transparentes Baseados nos 4 Pilares</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Todos os planos incluem os 4 pilares — varia apenas a profundidade. Sem taxa de adesão.
              Garantia de 7 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${plan.highlight ? "border-2 border-[#7c3aed] shadow-xl" : ""}`}
              >
                {plan.badge && (
                  <div className={`text-center text-xs font-bold py-1 rounded-t-lg text-white ${plan.highlight ? "bg-[#7c3aed]" : "bg-slate-600"}`}>
                    {plan.badge}
                  </div>
                )}
                <CardContent className="pt-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-1">
                    {plan.price}
                    {plan.price !== "Personalizado" && <span className="text-sm font-normal text-muted-foreground">/mês</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{plan.size}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="text-sm flex gap-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.highlight ? "bg-[#7c3aed] hover:bg-[#6d28d9]" : ""}`}
                    variant={plan.highlight ? "default" : "outline"}
                    onClick={() => window.open(plan.ctaLink, "_blank")}
                  >
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Todos os planos: contrato 12 meses, pagamento mensal • Cancelamento sem multa após 12 meses
          </p>
        </div>
      </section>

      {/* Sobre / Quem Somos */}
      <section id="sobre" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">4 Pilares LGPD — Expertise Multidisciplinar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A 4 Pilares LGPD é uma consultoria especializada em proteção de dados e conformidade legal
              com abordagem única baseada em quatro pilares fundamentais.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12 space-y-4 text-muted-foreground">
            <p>
              Nossa equipe multidisciplinar combina expertise em Direito, Tecnologia da Informação e
              Governança de Dados para oferecer soluções completas e integradas. Trabalhamos com
              metodologia ágil que garante adequação em 30–90 dias, mantendo conformidade contínua
              através de monitoramento e governança permanente.
            </p>
            <p>
              Com sede em <strong>Palmas-TO</strong> e atendimento 100% remoto em todo o Brasil, já
              auxiliamos mais de 100 organizações de diversos setores e portes na adequação à LGPD,
              Marco Civil da Internet e Estatuto Digital da Criança e do Adolescente.
            </p>
            <p className="text-xs text-muted-foreground/70">
              CNPJ: 58.551.044/0001-90 — Razão Social: 4 PILARES LGPD "LEI-REGRAS-CONFORMIDADE-TITULAR DOS DADOS"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚖️",
                title: "Coordenação Acadêmica",
                name: "Dr. João Pedro Pereira Passos",
                role: "Fundador e Coordenador",
                items: [
                  "Doutor em Biotecnologia (Rede BIONORTE - UFT/UFPA)",
                  "Mestre em Planejamento Tático",
                  "Professor Universitário (UNITOP - Direito Digital)",
                  "Pesquisador UFT",
                  "Livro em publicação: \"Direito Digital\" (Ed. Fórum)",
                ],
              },
              {
                icon: "⚖️",
                title: "Equipe Jurídica",
                name: "Escritório de Advocacia Vinculado",
                role: "Registro OAB-TO",
                items: [
                  "Defesa de processos ANPD",
                  "Litígios judiciais",
                  "Due diligence M&A",
                  "Pareceres técnicos",
                  "Contratos DPA/NDA",
                  "Assessoria regulatória",
                ],
              },
              {
                icon: "💻",
                title: "Equipe de TI",
                name: "Especialistas em Segurança da Informação",
                role: "Infraestrutura e Sistemas",
                items: [
                  "Arquitetura de segurança",
                  "Implementação técnica LGPD",
                  "Criptografia e controles",
                  "Testes de vulnerabilidade",
                  "Gestão de incidentes",
                  "Adequação de sistemas",
                ],
              },
            ].map((team) => (
              <Card key={team.title}>
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">{team.icon}</div>
                  <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-1">{team.title}</h3>
                  <p className="font-semibold mb-1">{team.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{team.role}</p>
                  <ul className="space-y-1">
                    {team.items.map((item) => (
                      <li key={item} className="text-sm flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <blockquote className="mt-12 text-center text-lg italic text-muted-foreground max-w-2xl mx-auto border-l-4 border-[#7c3aed] pl-6">
            "Nossa missão é democratizar o acesso à conformidade legal em proteção de dados, oferecendo
            soluções completas, ágeis e com o melhor custo-benefício do mercado."
          </blockquote>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-28 bg-[#0f172a] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a 4 Pilares LGPD?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFERENCIAIS.map((d) => (
              <div key={d.title} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <d.icon className="h-8 w-8 mb-4 text-blue-300" />
                <h3 className="font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-white/70 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground">5 etapas para sua empresa estar em conformidade total.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((step, i) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  {i < TIMELINE.length - 1 && <div className="w-0.5 flex-1 bg-[#7c3aed]/30 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">Tire suas dúvidas sobre LGPD, DPO e conformidade.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONECTE-SE — CTA Final */}
      <section id="conectese" className="py-20 md:py-28 bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Proteja Sua Empresa com os 4 Pilares da Conformidade</h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">Lei • Regras • Conformidade • Titular</p>
          <Badge className="bg-orange-600 hover:bg-orange-600 border-0 text-white text-sm px-4 py-1">
            🔥 DPO R$ 299/mês — Oferta limitada até 31/03/2026
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-[#7c3aed] hover:bg-white/90 text-base font-semibold px-8 h-12"
              asChild
            >
              <a href="#planos">💰 Ver Planos</a>
            </Button>
            <Button
              size="lg"
              className="bg-[#25d366] hover:bg-[#1ebe5d] text-white text-base font-semibold px-8 h-12"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              💬 WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-base font-semibold px-8 h-12"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              📅 Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">4 PILARES LGPD</h4>
              <p className="text-white/60 text-sm mb-4">Lei • Regras • Conformidade • Titular</p>
              <p className="text-white/50 text-xs">CNPJ: 58.551.044/0001-90</p>
              <p className="text-white/50 text-xs mt-2">Proteção de dados com abordagem estruturada</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">4 Pilares Conceituais</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#pilares" className="hover:text-white transition">🏛️ Lei</a></li>
                <li><a href="#pilares" className="hover:text-white transition">📋 Regras</a></li>
                <li><a href="#pilares" className="hover:text-white transition">✅ Conformidade</a></li>
                <li><a href="#pilares" className="hover:text-white transition">👤 Titular</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Planos</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#planos" className="hover:text-white transition">Essencial</a></li>
                <li><a href="#planos" className="hover:text-white transition">Profissional</a></li>
                <li><a href="#planos" className="hover:text-white transition">Empresarial</a></li>
                <li><a href="#planos" className="hover:text-white transition">Enterprise</a></li>
                <li>
                  <Link href="/privacidade" className="hover:text-white transition">Privacidade</Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-white transition">Termos de Uso</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+5563984381782" className="hover:text-white transition">(63) 98438-1782</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:contato@4pilares.com" className="hover:text-white transition">contato@4pilares.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Palmas-TO, Brasil</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>Seg–Sex 09:00–18:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 space-y-2">
            <p className="text-center text-sm text-white/50">
              © 2026 4 Pilares LGPD "Lei-Regras-Conformidade-Titular dos Dados" — CNPJ: 58.551.044/0001-90 —
              Todos os direitos reservados
            </p>
            <p className="text-center text-xs text-white/30">
              Lei 13.709/2018 (LGPD) | Lei 12.965/2014 (MCI) | Lei 15.211/2025 (Estatuto Digital)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
