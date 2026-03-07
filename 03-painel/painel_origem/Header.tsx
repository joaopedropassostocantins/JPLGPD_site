import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Star, ShieldCheck, Users, Phone, Lock } from "lucide-react";
import { useState } from "react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335220356/MaNDQeebYfmPoIMh.png";

function TopBar() {
  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="container flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-1 py-1.5 text-[11px] md:text-xs font-medium">
        {/* Reclame Aqui */}
        <span className="flex items-center gap-1.5">
          <span className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </span>
          <span className="font-semibold">Nota máxima</span> no Reclame Aqui
        </span>

        {/* Clientes */}
        <span className="hidden sm:flex items-center gap-1.5">
          <Users className="h-3 w-3" />
          <span className="font-semibold">+12.000</span> clientes atendidos
        </span>

        {/* Segurança */}
        <span className="hidden md:flex items-center gap-1.5">
          <Lock className="h-3 w-3" />
          Dados protegidos com <span className="font-semibold">criptografia SSL</span>
        </span>

        {/* Selo */}
        <span className="hidden lg:flex items-center gap-1.5">
          <ShieldCheck className="h-3 w-3" />
          Empresa verificada — CNPJ ativo
        </span>

        {/* Telefone */}
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" />
          0800-644-1600
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/transparencia", label: "ODS & Transparência" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <TopBar />
      <header className="w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
            <img
              src={LOGO_URL}
              alt="EmprestimoSocial.org"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
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
            <Link href="/#simulador">
              <Button size="sm" className="font-semibold">
                Simular agora
              </Button>
            </Link>
          </nav>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center gap-2 mb-6 mt-2">
                <img
                  src={LOGO_URL}
                  alt="EmprestimoSocial.org"
                  className="h-14 w-auto object-contain"
                />
              </div>

              {/* Trust badges mobile */}
              <div className="flex flex-col gap-2 mb-6 pb-4 border-b">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    ))}
                  </span>
                  Nota máxima — Reclame Aqui
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" /> +12.000 clientes atendidos
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3 w-3" /> Empresa verificada
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
                <Link href="/#simulador" onClick={() => setOpen(false)}>
                  <Button className="w-full font-semibold mt-2">
                    Simular agora
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
