import { Link } from "wouter";

/**
 * Terms - Página de termos de serviço
 * Design: Documento legal estruturado
 */
export default function Terms() {
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
            <h1 className="text-4xl font-bold mb-8">Termos de Serviço</h1>
            
            <div className="space-y-8 text-base">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground">
                  Ao acessar e usar este site, você aceita estar vinculado por estes Termos de Serviço. 
                  Se você não concorda com qualquer parte destes termos, não use este site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Uso Licenciado</h2>
                <p className="text-muted-foreground mb-3">É concedida a você uma licença limitada para:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Acessar e usar este site para fins legítimos</li>
                  <li>Não reproduzir, duplicar ou copiar conteúdo sem permissão</li>
                  <li>Não usar para fins comerciais não autorizados</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Isenção de Responsabilidade</h2>
                <p className="text-muted-foreground">
                  Este site é fornecido "como está". Não garantimos que o site será ininterrupto, 
                  seguro ou livre de erros. Você usa por sua conta e risco.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground">
                  Em nenhum caso a LGPD & DPO Solutions será responsável por danos indiretos, incidentais, 
                  especiais ou consequentes resultantes do uso ou incapacidade de usar este site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Modificações dos Termos</h2>
                <p className="text-muted-foreground">
                  Reservamos o direito de modificar estes termos a qualquer momento. 
                  Seu uso continuado do site após modificações constitui aceitação dos novos termos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Serviços Profissionais</h2>
                <p className="text-muted-foreground mb-3">
                  Os serviços oferecidos pela LGPD & DPO Solutions são de natureza consultiva. 
                  Recomendamos que você consulte profissionais jurídicos qualificados para questões específicas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Contato</h2>
                <p className="text-muted-foreground">
                  Para questões sobre estes termos, entre em contato conosco em <a href="mailto:contato@lgpd-dpo.com" className="text-primary hover:underline">contato@lgpd-dpo.com</a>
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
