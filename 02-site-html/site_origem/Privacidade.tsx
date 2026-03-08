import Layout from "@/components/Layout";

export default function Privacidade() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base prose-slate">
            <h1 className="text-3xl font-bold text-foreground mb-2">Politica de Privacidade</h1>
            <p className="text-sm text-muted-foreground mb-8">Ultima atualizacao: Marco de 2026</p>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Introducao</h2>
                <p className="text-sm text-muted-foreground">
                  A 4 Pilares Consultoria LTDA ("nos", "nosso" ou "Empresa") esta comprometida com a
                  protecao da privacidade e dos dados pessoais de seus clientes, prospects e usuarios
                  do site, em conformidade com a Lei Geral de Protecao de Dados Pessoais
                  (Lei n. 13.709/2018 — LGPD) e demais normas aplicaveis.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Dados Coletados</h2>
                <p className="text-sm text-muted-foreground">Coletamos os seguintes dados pessoais:</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                  <li><strong>Dados de identificacao:</strong> nome, CNPJ, razao social.</li>
                  <li><strong>Dados de contato:</strong> e-mail, telefone, WhatsApp.</li>
                  <li><strong>Dados de navegacao:</strong> endereco IP, cookies, paginas visitadas, parametros UTM.</li>
                  <li><strong>Dados do diagnostico:</strong> informacoes fornecidas durante o diagnostico inicial e execucao do servico.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Finalidade do Tratamento</h2>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-2">
                  <li>Prestacao de servicos de consultoria LGPD contratados.</li>
                  <li>Comunicacao sobre andamento dos servicos e novidades.</li>
                  <li>Envio de propostas comerciais solicitadas.</li>
                  <li>Cumprimento de obrigacoes legais e regulatorias.</li>
                  <li>Melhoria dos nossos servicos e experiencia do usuario.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Base Legal</h2>
                <p className="text-sm text-muted-foreground">
                  O tratamento de dados pessoais e realizado com base nas seguintes hipoteses legais
                  previstas na LGPD: consentimento do titular (Art. 7, I); execucao de contrato ou
                  procedimentos preliminares (Art. 7, V); cumprimento de obrigacao legal ou regulatoria
                  (Art. 7, II); e legitimo interesse (Art. 7, IX).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Compartilhamento de Dados</h2>
                <p className="text-sm text-muted-foreground">
                  Seus dados podem ser compartilhados com: prestadores de servicos essenciais
                  (hospedagem, processamento de pagamentos); e autoridades competentes, quando
                  exigido por lei. Nao vendemos ou comercializamos dados pessoais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Seguranca dos Dados</h2>
                <p className="text-sm text-muted-foreground">
                  Adotamos medidas tecnicas e organizacionais adequadas para proteger seus dados
                  pessoais contra acesso nao autorizado, destruicao, perda ou alteracao.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Direitos do Titular</h2>
                <p className="text-sm text-muted-foreground">
                  Conforme a LGPD, voce tem direito a: confirmar a existencia de tratamento; acessar
                  seus dados; corrigir dados incompletos; solicitar anonimizacao, bloqueio ou eliminacao;
                  solicitar portabilidade; revogar consentimento; e obter informacoes sobre compartilhamento.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Para exercer seus direitos, entre em contato: <strong>privacidade@4pilaresconsultoria.com.br</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Cookies</h2>
                <p className="text-sm text-muted-foreground">
                  Utilizamos cookies essenciais para o funcionamento do site e cookies analiticos para
                  melhorar a experiencia do usuario. Voce pode gerenciar suas preferencias de cookies
                  nas configuracoes do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Retencao de Dados</h2>
                <p className="text-sm text-muted-foreground">
                  Seus dados serao mantidos pelo periodo necessario para cumprir as finalidades
                  descritas nesta politica e para atender obrigacoes legais e regulatorias.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">10. Contato</h2>
                <p className="text-sm text-muted-foreground">
                  Para duvidas sobre esta Politica de Privacidade:<br />
                  E-mail: <strong>privacidade@4pilaresconsultoria.com.br</strong>
                </p>
              </section>

              <p className="text-xs text-muted-foreground mt-8 italic">
                * Este documento e uma minuta e deve ser revisado por advogado
                especializado antes de ser utilizado em producao.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
