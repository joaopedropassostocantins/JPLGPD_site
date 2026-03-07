import { Link } from "wouter";

/**
 * Privacy - Página de política de privacidade
 * Design: Documento legal estruturado
 */
export default function Privacy() {
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
          <div className="container max-w-3xl prose prose-sm">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="space-y-8 text-base">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
                <p className="text-muted-foreground">
                  A LGPD & DPO Solutions ("nós", "nosso" ou "empresa") está comprometida com a proteção de seus dados pessoais. 
                  Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Informações que Coletamos</h2>
                <p className="text-muted-foreground mb-3">Coletamos informações que você nos fornece diretamente, como:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Nome e informações de contato</li>
                  <li>Informações da empresa</li>
                  <li>Dados de navegação e uso do site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Como Usamos Suas Informações</h2>
                <p className="text-muted-foreground mb-3">Usamos as informações para:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fornecer nossos serviços</li>
                  <li>Responder a suas solicitações</li>
                  <li>Melhorar nosso site e serviços</li>
                  <li>Enviar comunicações de marketing (com consentimento)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Proteção de Dados</h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais 
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
                <p className="text-muted-foreground mb-3">Você tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados imprecisos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar consentimento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Contato</h2>
                <p className="text-muted-foreground">
                  Para questões sobre esta política, entre em contato conosco em <a href="mailto:contato@lgpd-dpo.com" className="text-primary hover:underline">contato@lgpd-dpo.com</a>
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
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
