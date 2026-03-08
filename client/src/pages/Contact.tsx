import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5563984381782?text=Quero%20contratar%20DPO%20por%20R%24299";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}.\nE-mail: ${form.email}\n\n${form.mensagem}`
    );
    window.open(`https://wa.me/5563984381782?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container flex items-center justify-between py-4">
          <div>
            <div className="text-xl font-bold text-[#0f172a]">4 PILARES LGPD</div>
            <div className="text-xs text-muted-foreground hidden sm:block">Lei • Regras • Conformidade • Titular</div>
          </div>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm hover:text-primary transition">Home</Link>
            <Link href="/servicos" className="text-sm hover:text-primary transition">Serviços</Link>
            <Link href="/sobre" className="text-sm hover:text-primary transition">Sobre</Link>
            <Link href="/contato" className="text-sm font-semibold text-primary">Contato</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-background py-20">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold mb-2">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Tire suas dúvidas ou solicite um diagnóstico gratuito para sua empresa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                {sent ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">✅</div>
                    <p className="font-semibold text-green-800">Mensagem enviada via WhatsApp!</p>
                    <p className="text-sm text-green-600 mt-2">Retornaremos em até 24h úteis.</p>
                    <Button className="mt-4" variant="outline" onClick={() => setSent(false)}>
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Sua empresa"
                        value={form.empresa}
                        onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem *</label>
                      <textarea
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                        placeholder="Como podemos ajudar sua empresa?"
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#25d366] hover:bg-[#1ebe5d]">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enviar via WhatsApp
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-[#7c3aed] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp / Telefone</h3>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7c3aed] hover:underline"
                      >
                        (63) 98438-1782
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#7c3aed] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contato@4pilares.com" className="text-[#7c3aed] hover:underline">
                        contato@4pilares.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-[#7c3aed] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Localização</h3>
                      <p className="text-muted-foreground">
                        Palmas, TO<br />
                        Brasil — Atendimento 100% remoto em todo o país
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-[#7c3aed] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta<br />
                        09:00 – 18:00 (Brasília)
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 border border-border mt-4">
                    <p className="text-sm font-semibold mb-1">SLA de Resposta:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Plano Essencial: e-mail em até 48h úteis</li>
                      <li>• Plano Profissional: e-mail + WhatsApp em 24h</li>
                      <li>• Plano Empresarial: suporte prioritário em 4h</li>
                      <li>• Plano Enterprise: suporte dedicado 24/7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">4 PILARES LGPD</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/servicos" className="hover:text-white transition">Serviços</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition">Sobre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/contato" className="hover:text-white transition">Contato</Link></li>
                <li><a href="mailto:contato@4pilares.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/privacidade" className="hover:text-white transition">Privacidade</Link></li>
                <li><Link href="/termos" className="hover:text-white transition">Termos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="tel:+5563984381782" className="hover:text-white transition">(63) 98438-1782</a></li>
                <li><span>Palmas-TO, Brasil</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/50">
            <p>© 2026 4 PILARES LGPD — CNPJ: 58.551.044/0001-90 — Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
