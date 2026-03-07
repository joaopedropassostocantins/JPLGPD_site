import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Leaf, Globe, Users, Sprout, ArrowRight, CheckCircle, Star,
  Search, FileText, Banknote, AlertTriangle, Heart, TrendingUp,
  Sun, HandHeart, Target, BookOpen
} from "lucide-react";

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const FAQ_ITEMS = [
  {
    question: "Como funciona o Empréstimo Social?",
    answer: "O Empréstimo Social é uma solução de crédito que combina acessibilidade com impacto social."
  },
  {
    question: "Quais são os prazos disponíveis?",
    answer: "Oferecemos prazos de 6, 12 e 18 meses, ajustáveis conforme sua necessidade."
  },
  {
    question: "Como contribuo para os ODS?",
    answer: "Parte dos juros é destinada a projetos que contribuem para os Objetivos de Desenvolvimento Sustentável."
  }
];

const ODS_GOALS = [
  { number: 1, title: "Erradicação da Pobreza", color: "#E5243B" },
  { number: 5, title: "Igualdade de Gênero", color: "#DD3623" },
  { number: 8, title: "Trabalho Decente", color: "#C6192B" },
  { number: 10, title: "Redução das Desigualdades", color: "#DD1C3B" },
  { number: 13, title: "Ação Climática", color: "#3F7E44" },
  { number: 17, title: "Parcerias para os Objetivos", color: "#0A97D9" }
];

export default function Home() {
  const [amount, setAmount] = useState(3000);
  const [term, setTerm] = useState("12");

  const handleSimulate = () => {
    alert(`Simulação: R$ ${amount.toLocaleString('pt-BR')} em ${term} meses`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold">4 PILARES LGPD</div>
          <nav className="hidden md:flex gap-8">
            <a href="#pilares" className="text-sm hover:text-primary transition">Pilares</a>
            <a href="#simulador" className="text-sm hover:text-primary transition">Simulador</a>
            <a href="#faq" className="text-sm hover:text-primary transition">FAQ</a>
          </nav>
          <Button>Contratar Agora</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 md:py-32">
        <div className="container text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            4 Pilares LGPD — Adequação Completa à Legislação Brasileira
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Solução corporativa baseada em 4 pilares: Lei, Regras, Conformidade e Direitos do Titular.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" variant="default">Ver Planos</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* 4 Pilares */}
      <section id="pilares" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossa Metodologia</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estrutura conceitual que garante conformidade total com a legislação brasileira.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "LEI", color: "bg-slate-900", icon: FileText, desc: "Base legal e legislação" },
              { title: "REGRAS", color: "bg-green-900", icon: BookOpen, desc: "Governança e processos" },
              { title: "CONFORMIDADE", color: "bg-orange-600", icon: CheckCircle, desc: "Certificação e adequação" },
              { title: "TITULAR", color: "bg-purple-600", icon: Users, desc: "Direitos e transparência" }
            ].map((pilar) => (
              <Card key={pilar.title} className={`${pilar.color} text-white`}>
                <CardContent className="pt-6">
                  <pilar.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{pilar.title}</h3>
                  <p className="text-sm opacity-90">{pilar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section id="simulador" className="py-20 md:py-32 bg-secondary/10">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Simulador de Conformidade</h2>
          
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Valor: {formatCurrency(amount)}
                </label>
                <Slider
                  value={[amount]}
                  onValueChange={(v) => setAmount(v[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Prazo (meses)</label>
                <Select value={term} onValueChange={setTerm}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6 meses</SelectItem>
                    <SelectItem value="12">12 meses</SelectItem>
                    <SelectItem value="18">18 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleSimulate} className="w-full" size="lg">
                Simular <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">Perguntas Frequentes</h2>
          <p className="text-center text-muted-foreground mb-12">
            Tire suas dúvidas sobre LGPD e conformidade.
          </p>
          
          <Accordion type="single" collapsible className="space-y-2">
            {FAQ_ITEMS.map((item: any, index: number) => (
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
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Faça parte da transformação
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Sua empresa pode estar em conformidade total. Simule agora e descubra como.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base font-semibold px-8 h-12"
          >
            Contratar Agora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex justify-center gap-2 pt-4 flex-wrap">
            {ODS_GOALS.filter((o: any) => [1, 5, 8, 10, 13, 17].includes(o.number)).map((ods: any) => (
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

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#pilares" className="hover:text-foreground">Pilares</a></li>
                <li><a href="#simulador" className="hover:text-foreground">Simulador</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacidade" className="hover:text-foreground">Privacidade</a></li>
                <li><a href="/termos" className="hover:text-foreground">Termos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:contato@4pilares.com" className="hover:text-foreground">Email</a></li>
                <li><a href="tel:+5511999999999" className="hover:text-foreground">Telefone</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 4 PILARES LGPD. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
