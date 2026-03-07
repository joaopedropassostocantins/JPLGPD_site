import Layout from "@/components/Layout";

export default function Privacidade() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base prose-slate">
            <h1 className="text-3xl font-bold text-foreground mb-2">Política de Privacidade</h1>
            <p className="text-sm text-muted-foreground mb-8">Última atualização: Fevereiro de 2026</p>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Introdução</h2>
                <p className="text-sm text-muted-foreground">
                  A Empréstimo Social LTDA ("nós", "nosso" ou "Empresa") está comprometida com a proteção da privacidade 
                  e dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais 
                  (Lei nº 13.709/2018 — LGPD) e demais normas aplicáveis.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas 
                  informações pessoais ao utilizar nosso site e serviços.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Dados Coletados</h2>
                <p className="text-sm text-muted-foreground">Coletamos os seguintes dados pessoais, de acordo com a finalidade e a etapa do processo:</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                  <li><strong>Dados de identificação:</strong> nome completo, CPF, data de nascimento.</li>
                  <li><strong>Dados de contato:</strong> e-mail, telefone celular.</li>
                  <li><strong>Dados de endereço:</strong> CEP, logradouro, número, complemento, bairro, cidade e estado.</li>
                  <li><strong>Dados financeiros:</strong> faixa de renda, ocupação, objetivo do empréstimo.</li>
                  <li><strong>Dados de navegação:</strong> endereço IP, cookies, parâmetros UTM, páginas visitadas.</li>
                  <li><strong>Dados de transação:</strong> informações relacionadas ao pagamento do seguro opcional via PIX.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Finalidade do Tratamento</h2>
                <p className="text-sm text-muted-foreground">Seus dados são tratados para as seguintes finalidades:</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Análise e concessão de crédito pessoal.</li>
                  <li>Prevenção à fraude e verificação de identidade.</li>
                  <li>Consulta a birôs de crédito (mediante consentimento).</li>
                  <li>Comunicação sobre o andamento da proposta.</li>
                  <li>Cumprimento de obrigações legais e regulatórias.</li>
                  <li>Melhoria dos nossos serviços e experiência do usuário.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Base Legal</h2>
                <p className="text-sm text-muted-foreground">
                  O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD: 
                  consentimento do titular (Art. 7º, I); execução de contrato ou procedimentos preliminares (Art. 7º, V); 
                  cumprimento de obrigação legal ou regulatória (Art. 7º, II); legítimo interesse (Art. 7º, IX); 
                  e proteção do crédito (Art. 7º, X).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Compartilhamento de Dados</h2>
                <p className="text-sm text-muted-foreground">
                  Seus dados podem ser compartilhados com: birôs de crédito (SPC, Serasa) para análise de crédito; 
                  prestadores de serviços essenciais (processamento de pagamentos, hospedagem de dados); 
                  e autoridades competentes, quando exigido por lei.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para fins de marketing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Segurança dos Dados</h2>
                <p className="text-sm text-muted-foreground">
                  Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso 
                  não autorizado, destruição, perda, alteração ou qualquer forma de tratamento inadequado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Direitos do Titular</h2>
                <p className="text-sm text-muted-foreground">
                  Conforme a LGPD, você tem direito a: confirmar a existência de tratamento; acessar seus dados; 
                  corrigir dados incompletos ou desatualizados; solicitar anonimização, bloqueio ou eliminação de dados 
                  desnecessários; solicitar portabilidade; revogar consentimento; e obter informações sobre compartilhamento.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Para exercer seus direitos, entre em contato pelo e-mail: <strong>privacidade@emprestimosocial.com.br</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Cookies</h2>
                <p className="text-sm text-muted-foreground">
                  Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para melhorar a experiência 
                  do usuário. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Retenção de Dados</h2>
                <p className="text-sm text-muted-foreground">
                  Seus dados serão mantidos pelo período necessário para cumprir as finalidades descritas nesta política 
                  e para atender obrigações legais e regulatórias. Após esse período, os dados serão eliminados ou anonimizados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">10. Contato</h2>
                <p className="text-sm text-muted-foreground">
                  Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, 
                  entre em contato com nosso Encarregado de Proteção de Dados (DPO):
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  E-mail: <strong>privacidade@emprestimosocial.com.br</strong><br />
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
