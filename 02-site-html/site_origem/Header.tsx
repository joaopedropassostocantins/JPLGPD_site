import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, Lock } from "lucide-react";
import { useState } from "react";

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

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicos", label: "Servicos" },
    { href: "/#faq", label: "FAQ" },
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos" },
  ];

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
            <a href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD" target="_blank" rel="noopener noreferrer">
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
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Consultoria LGPD</span>
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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground no-underline hover:text-primary py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
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
