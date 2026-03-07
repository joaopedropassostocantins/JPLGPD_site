import Layout from "@/components/Layout";

export default function Termos() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Termos de Uso</h1>
            <p className="text-sm text-muted-foreground mb-8">Última atualização: Fevereiro de 2026</p>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Aceitação dos Termos</h2>
                <p className="text-sm text-muted-foreground">
                  Ao acessar e utilizar o site e os serviços da Empréstimo Social LTDA ("Empresa"), você declara 
                  ter lido, compreendido e aceito integralmente estes Termos de Uso. Caso não concorde com qualquer 
                  disposição, não utilize nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Descrição dos Serviços</h2>
                <p className="text-sm text-muted-foreground">
                  A Empresa oferece serviços de originação de crédito pessoal (empréstimo social), incluindo: 
                  simulação de empréstimo; coleta e análise de propostas de crédito; e oferta opcional de seguro. 
                  A Empresa atua como originadora de crédito próprio, não sendo intermediária financeira.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Elegibilidade</h2>
                <p className="text-sm text-muted-foreground">
                  Para utilizar nossos serviços, você deve: ser pessoa física, maior de 18 anos; possuir CPF válido 
                  e regular; residir no território brasileiro; e fornecer informações verdadeiras e completas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Simulação e Proposta</h2>
                <p className="text-sm text-muted-foreground">
                  A simulação de empréstimo é meramente ilustrativa e não constitui oferta vinculante. Os valores, 
                  taxas e condições apresentados na simulação podem variar conforme a análise de crédito. A aprovação 
                  do crédito não é garantida e depende da análise do perfil do solicitante.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ao enviar uma proposta, o usuário autoriza a Empresa a realizar a análise de crédito, incluindo 
                  consulta a birôs de crédito, conforme consentimento específico fornecido durante o processo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Seguro Opcional</h2>
                <p className="text-sm text-muted-foreground">
                  A Empresa oferece um seguro opcional no valor de R$ 19,00 (dezenove reais), pago via PIX. 
                  A contratação do seguro é totalmente voluntária e não constitui condição para a aprovação 
                  do empréstimo. O usuário pode optar por não contratar o seguro sem qualquer prejuízo à análise 
                  de sua proposta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Obrigações do Usuário</h2>
                <p className="text-sm text-muted-foreground">
                  O usuário se compromete a: fornecer informações verdadeiras, completas e atualizadas; não utilizar 
                  o site para fins ilícitos ou fraudulentos; manter a confidencialidade de seus dados de acesso; 
                  e comunicar imediatamente qualquer uso não autorizado de sua conta.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Taxas e Encargos</h2>
                <p className="text-sm text-muted-foreground">
                  As taxas de juros, CET (Custo Efetivo Total) e demais encargos serão informados de forma clara 
                  e transparente antes da contratação do crédito, em conformidade com o Código de Defesa do Consumidor 
                  (Lei nº 8.078/1990) e regulamentações do Banco Central do Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Cancelamento e Desistência</h2>
                <p className="text-sm text-muted-foreground">
                  O usuário pode cancelar sua proposta a qualquer momento antes da liberação do crédito, sem custos 
                  adicionais. Após a contratação, aplica-se o direito de arrependimento previsto no CDC, no prazo 
                  de 7 (sete) dias corridos a contar da assinatura do contrato.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Propriedade Intelectual</h2>
                <p className="text-sm text-muted-foreground">
                  Todo o conteúdo do site, incluindo textos, imagens, logotipos, layout e código-fonte, é de 
                  propriedade da Empresa e protegido pela legislação de propriedade intelectual. É proibida a 
                  reprodução, distribuição ou modificação sem autorização prévia.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">10. Limitação de Responsabilidade</h2>
                <p className="text-sm text-muted-foreground">
                  A Empresa não se responsabiliza por: decisões financeiras tomadas pelo usuário com base nas simulações; 
                  indisponibilidade temporária do site por motivos técnicos; e danos decorrentes de informações falsas 
                  fornecidas pelo usuário.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">11. Foro</h2>
                <p className="text-sm text-muted-foreground">
                  Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes 
                  destes Termos de Uso, com renúncia a qualquer outro, por mais privilegiado que seja.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">12. Contato</h2>
                <p className="text-sm text-muted-foreground">
                  Para dúvidas sobre estes Termos de Uso, entre em contato:<br />
                  E-mail: <strong>contato@emprestimosocial.com.br</strong><br />
                  Telefone: <strong>0800-644-1600 — opção 2</strong>
                </p>
              </section>

              <p className="text-xs text-muted-foreground mt-8 italic">
                * Este documento é um modelo para fins de demonstração e deve ser revisado por um advogado 
                especializado antes de ser utilizado em produção.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
