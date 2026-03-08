import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Lock, Phone, Mail } from "lucide-react";
import { useState } from "react";

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicos", label: "Servicos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/termos", label: "Termos" },
];

function TopBar() {
  return (
    <div className="w-full bg-slate-900 text-slate-300">
      <div className="container flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-1 py-1.5 text-[11px] md:text-xs font-medium">
        <span className="flex items-center gap-1.5">
          <Shield className="h-3 w-3" />
          Consultoria LGPD &middot; DPO as a Service
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <Lock className="h-3 w-3" />
          Dados protegidos com <span className="font-semibold">criptografia SSL</span>
        </span>
        <span className="flex items-center gap-1.5">
          contato@4pilaresconsultoria.com.br
        </span>
      </div>
    </div>
  );
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = NAV_LINKS.slice(0, 4);

  return (
    <div className="sticky top-0 z-50 w-full">
      <TopBar />
      <header className="w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                4 Pilares
              </span>
              <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-wider uppercase">
                Consultoria LGPD
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors no-underline hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="font-semibold bg-emerald-600 hover:bg-emerald-700">
                Falar com consultor
              </Button>
            </a>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 mb-6 mt-2">
                <span className="text-lg font-bold text-foreground">4 Pilares</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Consultoria LGPD
                </span>
              </div>
              <div className="flex flex-col gap-2 mb-6 pb-4 border-b">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" /> DPO as a Service
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3 w-3" /> Ambiente seguro
                </span>
              </div>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground no-underline hover:text-primary py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full font-semibold mt-2 bg-emerald-600 hover:bg-emerald-700">
                    Falar com consultor
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">
                4 Pilares Consultoria
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                LGPD &middot; DPO as a Service
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Consultoria especializada em privacidade e protecao de dados pessoais.
              Estruturacao de governanca, documentacao LGPD, DPO terceirizado e
              suporte continuo para pequenas e medias empresas.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Institucional</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/servicos"
                className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
              >
                Servicos
              </Link>
              <Link
                href="/sobre"
                className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/privacidade"
                className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
              >
                Politica de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:contato@4pilaresconsultoria.com.br"
                className="flex items-center gap-2 hover:text-primary transition-colors no-underline"
              >
                <Mail className="h-3.5 w-3.5" />
                contato@4pilaresconsultoria.com.br
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors no-underline"
              >
                <Phone className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <p>Seg a Sex, 9h as 18h</p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              4 Pilares Consultoria LTDA | CNPJ: 58.551.044/0001-90
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} 4 Pilares Consultoria &mdash; Todos os direitos
              reservados.
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center leading-relaxed">
            Os servicos de consultoria visam apoiar a adequacao a LGPD (Lei 13.709/2018) e nao
            constituem garantia de conformidade total. A implementacao depende da colaboracao
            ativa do contratante. Consulte sempre um advogado para questoes juridicas especificas.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
