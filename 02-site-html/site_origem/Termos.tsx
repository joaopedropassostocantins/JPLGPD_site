import Layout from "@/components/Layout";

export default function Termos() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Termos de Uso</h1>
            <p className="text-sm text-muted-foreground mb-8">Ultima atualizacao: Marco de 2026</p>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Aceitacao dos Termos</h2>
                <p className="text-sm text-muted-foreground">
                  Ao acessar e utilizar o site e os servicos da 4 Pilares Consultoria LTDA ("Empresa"),
                  voce declara ter lido, compreendido e aceito integralmente estes Termos de Uso.
                  Caso nao concorde com qualquer disposicao, nao utilize nossos servicos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Descricao dos Servicos</h2>
                <p className="text-sm text-muted-foreground">
                  A Empresa oferece servicos de consultoria em privacidade e protecao de dados pessoais,
                  incluindo: DPO as a Service (Encarregado de Dados terceirizado); elaboracao de documentacao
                  LGPD (politica de privacidade, RIPD, ROPA, termos de uso); auditoria e diagnostico de
                  conformidade; e treinamentos para equipes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Contratacao</h2>
                <p className="text-sm text-muted-foreground">
                  A contratacao dos servicos se da mediante proposta comercial e assinatura de contrato
                  de prestacao de servicos. O contrato padrao (Plano Essencial) tem prazo de 24 meses,
                  com condicoes detalhadas na proposta contratual enviada apos o diagnostico inicial.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Obrigacoes do Usuario</h2>
                <p className="text-sm text-muted-foreground">
                  O usuario se compromete a: fornecer informacoes verdadeiras e completas; colaborar
                  ativamente com as atividades de adequacao; manter a confidencialidade dos documentos
                  produzidos; e comunicar imediatamente qualquer incidente de seguranca envolvendo dados
                  pessoais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Pagamento</h2>
                <p className="text-sm text-muted-foreground">
                  Os valores e condicoes de pagamento serao definidos na proposta contratual. O Plano
                  Essencial preve R$ 150/mes nos primeiros 12 meses e R$ 300/mes nos meses 13 a 24
                  (contrato de 24 meses, total de R$ 5.400). Formas de pagamento incluem PIX, boleto
                  e cartao de credito.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Cancelamento e Rescisao</h2>
                <p className="text-sm text-muted-foreground">
                  O contratante pode solicitar a rescisao a qualquer momento, observada a multa
                  proporcional prevista no contrato. Antes do inicio da execucao, aplica-se o direito
                  de arrependimento de 7 (sete) dias corridos, conforme o Codigo de Defesa do Consumidor.
                  Detalhes completos constam na proposta contratual.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Limitacao de Responsabilidade</h2>
                <p className="text-sm text-muted-foreground">
                  A Empresa nao garante conformidade total com a LGPD, pois a adequacao depende da
                  colaboracao ativa do contratante e de fatores operacionais de seu negocio. A Empresa
                  nao se responsabiliza por decisoes tomadas pelo contratante sem consulta previa,
                  nem por incidentes causados por falhas de seguranca do contratante.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">8. Propriedade Intelectual</h2>
                <p className="text-sm text-muted-foreground">
                  Os documentos, modelos e materiais produzidos pela Empresa no ambito da prestacao de
                  servicos sao de uso exclusivo do contratante, vedada a redistribuicao comercial sem
                  autorizacao. O conteudo do site e de propriedade da Empresa.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">9. Foro</h2>
                <p className="text-sm text-muted-foreground">
                  Fica eleito o foro da comarca de Palmas/TO para dirimir quaisquer controversias
                  decorrentes destes Termos de Uso, com renuncia a qualquer outro, por mais
                  privilegiado que seja.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">10. Contato</h2>
                <p className="text-sm text-muted-foreground">
                  Para duvidas sobre estes Termos de Uso, entre em contato:<br />
                  E-mail: <strong>contato@4pilaresconsultoria.com.br</strong>
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
