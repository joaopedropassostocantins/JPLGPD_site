import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-tight">4 Pilares Consultoria</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">LGPD &middot; DPO as a Service</span>
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
              <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors">Servicos</Link>
              <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors">Politica de Privacidade</Link>
              <Link href="/termos" className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors">Termos de Uso</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contato@4pilaresconsultoria.com.br</p>
              <p>Seg a Sex, 9h as 18h</p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">4 Pilares Consultoria LTDA | CNPJ: 58.551.044/0001-90</p>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} 4 Pilares Consultoria — Todos os direitos reservados.</p>
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
