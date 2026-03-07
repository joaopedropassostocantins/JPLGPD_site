import { Link } from "wouter";

/**
 * About - Página sobre a empresa
 * Design: Informações institucionais básicas
 */
export default function About() {
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
            <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-muted-foreground">
                  Simplificar a conformidade com a Lei Geral de Proteção de Dados (LGPD) para empresas de todos os tamanhos, 
                  fornecendo serviços especializados de Data Protection Officer (DPO) e consultoria em proteção de dados.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Visão</h2>
                <p className="text-muted-foreground">
                  Ser a referência em conformidade LGPD no Brasil, ajudando organizações a proteger dados pessoais 
                  e construir confiança com seus clientes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Valores</h2>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-semibold">Excelência:</span>
                    <span className="text-muted-foreground">Qualidade em tudo que fazemos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">Transparência:</span>
                    <span className="text-muted-foreground">Comunicação clara e honesta</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">Inovação:</span>
                    <span className="text-muted-foreground">Soluções modernas e eficientes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">Confiabilidade:</span>
                    <span className="text-muted-foreground">Parceiro de longo prazo</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Equipe</h2>
                <p className="text-muted-foreground">
                  Profissionais especializados em direito, tecnologia e conformidade regulatória, 
                  com experiência em implementação de programas de proteção de dados.
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
