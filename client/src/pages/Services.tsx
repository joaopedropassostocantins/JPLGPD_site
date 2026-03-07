import { Link } from "wouter";

/**
 * Services - Página de serviços
 * Design: Listagem clara de serviços com descrições
 */
export default function Services() {
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
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Soluções completas para conformidade LGPD e proteção de dados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Documentação LGPD</h2>
                <p className="text-muted-foreground mb-4">
                  Elaboração de políticas de privacidade, termos de uso, avisos de cookies e documentação de conformidade.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Política de Privacidade</li>
                  <li>✓ Termos de Serviço</li>
                  <li>✓ Aviso de Cookies</li>
                  <li>✓ Registro de Atividades de Processamento</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Auditoria de Conformidade</h2>
                <p className="text-muted-foreground mb-4">
                  Avaliação completa de seus processos e sistemas para identificar gaps de conformidade.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Diagnóstico de Conformidade</li>
                  <li>✓ Identificação de Riscos</li>
                  <li>✓ Plano de Remediação</li>
                  <li>✓ Relatório Executivo</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Treinamentos</h2>
                <p className="text-muted-foreground mb-4">
                  Capacitação de equipes em proteção de dados e conformidade regulatória.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Treinamento LGPD Básico</li>
                  <li>✓ Treinamento Avançado</li>
                  <li>✓ Workshops Temáticos</li>
                  <li>✓ Certificação</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">DPO como Serviço</h2>
                <p className="text-muted-foreground mb-4">
                  Contratação de Data Protection Officer especializado para sua organização.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ DPO Dedicado</li>
                  <li>✓ Consultoria Contínua</li>
                  <li>✓ Suporte Regulatório</li>
                  <li>✓ Gestão de Incidentes</li>
                </ul>
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
