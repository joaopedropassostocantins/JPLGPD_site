import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ODS_GOALS } from "@shared/loan-types";
import { Globe, Leaf, Target, TrendingUp, HandHeart, Sun } from "lucide-react";

export default function Transparencia() {
  return (
    <Layout>
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 mb-12">
              <div className="flex justify-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs font-medium px-3 py-1 border-primary/30 text-primary">
                  <Globe className="h-3 w-3 mr-1" /> Agenda 2030
                </Badge>
                <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                  <Target className="h-3 w-3 mr-1" /> ODS da ONU
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                ODS, Transparência e Política de Crédito
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça nosso compromisso com os Objetivos de Desenvolvimento Sustentável da ONU 
                e nossa política de crédito transparente.
              </p>
            </div>

            {/* ODS Section */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Objetivos de Desenvolvimento Sustentável (ODS)</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Os Objetivos de Desenvolvimento Sustentável (ODS) são 17 metas globais estabelecidas pela 
                  Organização das Nações Unidas (ONU) em 2015, como parte da Agenda 2030 para o Desenvolvimento 
                  Sustentável. Eles representam um chamado universal à ação para erradicar a pobreza, proteger o 
                  planeta e garantir que todas as pessoas desfrutem de paz e prosperidade.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  O Empréstimo Social se alinha diretamente a diversos ODS, utilizando o crédito como instrumento 
                  de transformação social e ambiental. Acreditamos que o acesso ao financiamento responsável é 
                  fundamental para o desenvolvimento sustentável do Brasil.
                </p>

                {/* ODS Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ODS_GOALS.map((ods) => (
                    <div key={ods.number} className="flex items-center gap-3 p-3 rounded-lg border">
                      <div
                        className="h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
                        style={{ backgroundColor: ods.color }}
                      >
                        {ods.number}
                      </div>
                      <span className="text-sm font-medium text-foreground">{ods.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Crédito ODS */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Crédito ODS (ODS 8 — Trabalho Decente)</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instituições financeiras, no Brasil e no mundo, oferecem linhas de crédito facilitadas para 
                  empreendimentos que cumprem metas de sustentabilidade da ONU. O ODS 8 busca promover o crescimento 
                  econômico sustentado, inclusivo e sustentável, o emprego pleno e produtivo e o trabalho decente 
                  para todos.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  O Empréstimo Social opera com foco em <strong>inclusão financeira</strong>, <strong>igualdade 
                  de gênero</strong> e apoio a <strong>negócios sociais</strong>. Oferecemos condições diferenciadas 
                  para projetos que demonstrem impacto positivo na sociedade e no meio ambiente.
                </p>
              </CardContent>
            </Card>

            {/* Negócios Sustentáveis */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Crédito para Negócios Sustentáveis (ODS 17)</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bancos de fomento como o <strong>BNDES</strong> operam financiamentos para projetos com selos 
                  "verdes" ou de impacto social, incluindo energia solar, eficiência energética e apoio a pequenos 
                  produtores, alinhados com o ODS 17 (Parcerias e Meios de Implementação).
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Programas como o <strong>Crédito ODS da Trê Investimentos</strong> utilizam a plataforma 
                  Trê-MOVA para financiar negócios com propósito socioambiental. O Empréstimo Social se inspira 
                  nessas iniciativas para democratizar o acesso ao crédito sustentável no Brasil.
                </p>
              </CardContent>
            </Card>

            {/* Microcrédito Yunus */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <HandHeart className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Microcrédito e Impacto — Inspiração Yunus</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Muhammad Yunus</strong>, Nobel da Paz em 2006, revolucionou o conceito de microcrédito 
                  ao fundar o <strong>Grameen Bank</strong> em Bangladesh. Seu modelo provou que pessoas de baixa 
                  renda — especialmente mulheres — são excelentes pagadoras quando recebem oportunidade e confiança.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Iniciativas inspiradas no Grameen Bank são frequentemente citadas na agenda da ONU 
                  (<strong>ODS 8.10</strong>) para fornecer acesso ao crédito a populações de baixa renda. 
                  O Empréstimo Social se inspira nessa filosofia para democratizar o acesso ao crédito no Brasil, 
                  com taxas justas e transparência total.
                </p>

                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    "A pobreza não é criada pelas pessoas pobres. Ela é criada pelas instituições e políticas 
                    que as cercam." — Muhammad Yunus
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Agenda 2030 */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Agenda 2030 da ONU</h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  As Nações Unidas visam, através da <strong>Agenda 2030</strong>, aumentar o financiamento para 
                  o desenvolvimento sustentável, incentivando o setor privado e instituições financeiras a oferecerem 
                  produtos de crédito que ajudem a <strong>erradicar a pobreza</strong> e <strong>proteger o 
                  planeta</strong>.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  O Empréstimo Social é uma resposta a esse chamado. Ao oferecer crédito acessível e transparente, 
                  contribuímos para a construção de um sistema financeiro mais justo e inclusivo, onde cada 
                  empréstimo pode gerar impacto positivo na sociedade e no meio ambiente.
                </p>
              </CardContent>
            </Card>

            {/* Política de Crédito */}
            <Card className="mb-8">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sun className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Política de Crédito</h2>
                </div>

                {/* Conditions table */}
                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Valores disponíveis</p>
                        <p className="font-semibold text-foreground">R$ 300 a R$ 10.000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Prazos</p>
                        <p className="font-semibold text-foreground">6, 12, 18 ou 24 meses</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Taxa de juros</p>
                        <p className="font-semibold text-foreground">2,49% a 5,99% ao mês</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">CET estimado</p>
                        <p className="font-semibold text-foreground">37% a 104% ao ano</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Sistema de amortização</p>
                        <p className="font-semibold text-foreground">Tabela Price (parcelas fixas)</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Prazo de análise</p>
                        <p className="font-semibold text-foreground">Até 3 dias úteis</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <h3 className="text-base font-semibold text-foreground">Como Calculamos as Taxas</h3>
                  <p>
                    As taxas de juros são definidas com base no valor solicitado, prazo escolhido e perfil de crédito. 
                    Utilizamos a <strong>Tabela Price</strong> para garantir parcelas fixas durante todo o período.
                  </p>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <p className="text-sm font-mono text-foreground text-center">
                        PMT = PV × [i × (1+i)^n] / [(1+i)^n - 1]
                      </p>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Onde: PMT = parcela, PV = valor presente, i = taxa mensal, n = número de parcelas
                      </p>
                    </CardContent>
                  </Card>

                  <h3 className="text-base font-semibold text-foreground">Análise de Risco</h3>
                  <p>
                    Toda proposta passa por análise de crédito que considera dados cadastrais, consulta a birôs de 
                    crédito (SPC/Serasa) mediante consentimento, renda declarada e capacidade de pagamento. 
                    A aprovação não é garantida.
                  </p>

                  <h3 className="text-base font-semibold text-foreground">Seguro Opcional</h3>
                  <p>
                    O seguro de proteção ao crédito é <strong>totalmente opcional</strong> e não é condição para 
                    aprovação. O valor é de R$ 19,00 (pagamento único via PIX ou cartão).
                  </p>

                  <h3 className="text-base font-semibold text-foreground">Antecipação e Cancelamento</h3>
                  <p>
                    O cliente pode antecipar parcelas com desconto proporcional dos juros (Art. 52, §2º do CDC). 
                    A proposta pode ser cancelada antes da liberação do crédito, sem custos. Após a contratação, 
                    o direito de arrependimento é de 7 dias corridos.
                  </p>

                  <h3 className="text-base font-semibold text-foreground">Atendimento</h3>
                  <p>
                    E-mail: <strong>contato@emprestimosocial.com.br</strong><br />
                    Telefone: <strong>0800-644-1600 — opção 2</strong><br />
                    Horário: Segunda a sexta, das 9h às 18h.<br />
                    Caso não consiga resolver sua questão, registre uma reclamação no <strong>consumidor.gov.br</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <div className="bg-muted/50 rounded-lg p-4 text-xs text-muted-foreground leading-relaxed text-center">
              <p>Empréstimo Social LTDA | CNPJ: 23.952.238/0001-12</p>
              <p className="mt-2">
                As informações sobre os ODS e a Agenda 2030 são baseadas em documentos públicos das Nações Unidas. 
                As taxas e condições são ilustrativas e sujeitas à análise de crédito. 
                A aprovação do crédito não é garantida. Este site não é afiliado à ONU.
              </p>
              <p className="mt-2">
                * Este documento é um modelo para fins de demonstração e deve ser revisado por profissionais 
                especializados antes de ser utilizado em produção.
              </p>
              <p className="mt-1">Última atualização: Fevereiro de 2026</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
