import { Link } from "wouter";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663335220356/MaNDQeebYfmPoIMh.png";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="EmprestimoSocial.org"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Crédito acessível alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. 
              Acreditamos que o acesso ao crédito responsável é um instrumento de transformação social, 
              contribuindo para a erradicação da pobreza e o desenvolvimento sustentável conforme a Agenda 2030.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[1, 5, 8, 10, 17].map((ods) => (
                <span
                  key={ods}
                  className="inline-flex items-center justify-center h-7 w-7 rounded text-[10px] font-bold text-white"
                  style={{
                    backgroundColor:
                      ods === 1 ? "#E5243B" :
                      ods === 5 ? "#FF3A21" :
                      ods === 8 ? "#A21942" :
                      ods === 10 ? "#DD1367" :
                      "#19486A",
                  }}
                  title={`ODS ${ods}`}
                >
                  {ods}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Institucional</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/transparencia" className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors">
                ODS & Transparência
              </Link>
              <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-sm text-muted-foreground hover:text-primary no-underline transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contato@emprestimosocial.com.br</p>
              <p>0800-644-1600 — opção 2</p>
              <p>Seg a Sex, 9h às 18h</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Empréstimo Social LTDA | CNPJ: 23.952.238/0001-12
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} EmprestimoSocial.org — Todos os direitos reservados.
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center leading-relaxed">
            Plataforma alinhada à Agenda 2030 da ONU e aos Objetivos de Desenvolvimento Sustentável (ODS). 
            As taxas e condições apresentadas são ilustrativas e sujeitas à análise de crédito. 
            A aprovação do crédito não é garantida. Inspirado nos princípios do microcrédito de Muhammad Yunus e no modelo Grameen Bank.
          </p>
        </div>
      </div>
    </footer>
  );
}
