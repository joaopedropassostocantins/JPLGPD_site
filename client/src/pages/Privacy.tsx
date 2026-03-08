import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Politica de Privacidade</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Ultima atualizacao: {new Date().toLocaleDateString("pt-BR")} · 4 Pilares Consultoria
            LTDA · CNPJ: 58.551.044/0001-90
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Identificacao</h2>
              <p>
                Controlador dos dados: <strong className="text-foreground">4 Pilares Consultoria LTDA</strong>, CNPJ 58.551.044/0001-90.
                Encarregado de Dados (DPO): acessivel pelo e-mail{" "}
                <a
                  href="mailto:privacidade@4pilaresconsultoria.com.br"
                  className="text-primary hover:underline"
                >
                  privacidade@4pilaresconsultoria.com.br
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Dados que coletamos
              </h2>
              <p className="mb-3">
                Coletamos dados estritamente necessarios para a prestacao dos servicos contratados:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Nome e dados de contato (e-mail, telefone, WhatsApp)</li>
                <li>Razao social e CNPJ da empresa contratante</li>
                <li>Dados fornecidos em formularios de diagnostico e contratacao</li>
                <li>Dados de acesso ao site (logs, cookies tecnicos)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Finalidade e base legal
              </h2>
              <p className="mb-3">O tratamento e realizado com as seguintes finalidades e bases legais:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Execucao do contrato de consultoria e DPO as a Service (Art. 7, V, LGPD)
                </li>
                <li>
                  Atendimento a obrigacoes legais e regulatorias (Art. 7, II, LGPD)
                </li>
                <li>
                  Envio de comunicacoes de marketing mediante consentimento expresso (Art. 7, I,
                  LGPD)
                </li>
                <li>
                  Exercicio regular de direitos em processos administrativos ou judiciais (Art. 7,
                  VI, LGPD)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Compartilhamento de dados
              </h2>
              <p>
                Nao vendemos ou cedemos dados pessoais a terceiros para fins proprios. Podemos
                compartilhar dados com operadores tecnicos (ex.: plataformas de e-mail, hospedagem)
                mediante contrato de processamento (DPA) adequado. Em caso de obrigacao legal,
                dados podem ser compartilhados com autoridades competentes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Retencao de dados</h2>
              <p>
                Dados de clientes sao retidos pelo prazo contratual e pelo prazo legal aplicavel
                (geralmente 5 anos apos o encerramento contratual). Dados de prospeccao sem
                conversao sao excluidos em ate 12 meses. Logs de acesso ao site sao mantidos por
                6 meses, conforme Marco Civil da Internet.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Seus direitos como titular
              </h2>
              <p className="mb-3">
                Nos termos dos Arts. 17 a 22 da LGPD, voce tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confirmar a existencia do tratamento e acessar seus dados</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimizacao, bloqueio ou eliminacao de dados desnecessarios</li>
                <li>Portabilidade dos dados a outro fornecedor</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>Obter informacoes sobre compartilhamento com terceiros</li>
                <li>Peticionar a ANPD em caso de descumprimento</li>
              </ul>
              <p className="mt-3">
                Solicitacoes devem ser enviadas para{" "}
                <a
                  href="mailto:privacidade@4pilaresconsultoria.com.br"
                  className="text-primary hover:underline"
                >
                  privacidade@4pilaresconsultoria.com.br
                </a>
                . Responderemos em ate 15 dias uteis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Seguranca</h2>
              <p>
                Adotamos medidas tecnicas e organizacionais adequadas, incluindo criptografia em
                transito (TLS/SSL), controles de acesso baseados em perfil, e politica interna de
                seguranca da informacao. Em caso de incidente relevante, notificaremos a ANPD e os
                titulares afetados no prazo legal.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Cookies</h2>
              <p>
                Utilizamos apenas cookies tecnicos essenciais para o funcionamento do site. Nao
                utilizamos cookies de rastreamento ou publicidade sem consentimento expresso. Voce
                pode configurar seu navegador para bloquear cookies, mas isso pode afetar a
                experiencia no site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Alteracoes a esta politica
              </h2>
              <p>
                Esta politica pode ser atualizada periodicamente. Alteracoes relevantes serao
                comunicadas por e-mail aos titulares cadastrados com antecedencia minima de 30 dias.
                A data da ultima atualizacao e exibida no topo deste documento.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">10. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer duvidas sobre esta politica, entre em
                contato com nosso Encarregado de Dados pelo e-mail{" "}
                <a
                  href="mailto:privacidade@4pilaresconsultoria.com.br"
                  className="text-primary hover:underline"
                >
                  privacidade@4pilaresconsultoria.com.br
                </a>{" "}
                ou pelo e-mail geral{" "}
                <a
                  href="mailto:contato@4pilaresconsultoria.com.br"
                  className="text-primary hover:underline"
                >
                  contato@4pilaresconsultoria.com.br
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
