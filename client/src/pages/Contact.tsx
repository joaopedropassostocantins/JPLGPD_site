import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Contact - Página de contato
 * Design: Formulário simples e informações de contato
 */
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold">LGPD & DPO</div>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm hover:text-primary transition">Home</Link>
            <Link href="/servicos" className="text-sm hover:text-primary transition">Serviços</Link>
            <Link href="/sobre" className="text-sm hover:text-primary transition">Sobre</Link>
            <Link href="/contato" className="text-sm hover:text-primary transition">Contato</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-background py-20">
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Tire suas dúvidas ou solicite um orçamento para nossos serviços.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                      placeholder="Sua mensagem..."
                    />
                  </div>
                  <Button className="w-full">Enviar Mensagem</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:contato@lgpd-dpo.com" className="text-primary hover:underline">
                      contato@lgpd-dpo.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Telefone</h3>
                    <a href="tel:+5511999999999" className="text-primary hover:underline">
                      +55 (11) 9999-9999
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta<br />
                      09:00 - 18:00
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Localização</h3>
                    <p className="text-muted-foreground">
                      São Paulo, SP<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/servicos" className="text-muted-foreground hover:text-foreground">Serviços</Link></li>
                <li><Link href="/sobre" className="text-muted-foreground hover:text-foreground">Sobre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contato" className="text-muted-foreground hover:text-foreground">Contato</Link></li>
                <li><a href="mailto:contato@lgpd-dpo.com" className="text-muted-foreground hover:text-foreground">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacidade" className="text-muted-foreground hover:text-foreground">Privacidade</Link></li>
                <li><Link href="/termos" className="text-muted-foreground hover:text-foreground">Termos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Subdomínios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://app.lgpd-dpo.com" className="text-muted-foreground hover:text-foreground">App</a></li>
                <li><a href="https://docs.lgpd-dpo.com" className="text-muted-foreground hover:text-foreground">Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 LGPD & DPO Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
