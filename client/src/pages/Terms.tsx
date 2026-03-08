import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Termos de Uso</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Ultima atualizacao: {new Date().toLocaleDateString("pt-BR")} · 4 Pilares Consultoria
            LTDA · CNPJ: 58.551.044/0001-90
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Aceitacao dos termos
              </h2>
              <p>
                Ao acessar este site ou contratar os servicos da{" "}
                <strong className="text-foreground">4 Pilares Consultoria LTDA</strong> (CNPJ
                58.551.044/0001-90), voce concorda com estes Termos de Uso. Caso nao concorde com
                qualquer clausula, nao utilize este site nem contrate nossos servicos.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Objeto</h2>
              <p>
                A 4 Pilares Consultoria presta servicos de consultoria em privacidade e protecao de
                dados pessoais, incluindo DPO as a Service, elaboracao de documentacao LGPD,
                auditorias de conformidade e treinamentos de equipes. Os servicos sao de natureza
                consultiva e nao substituem assessoria juridica especializada.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Natureza dos servicos
              </h2>
              <p className="mb-3">
                Os servicos de consultoria visam apoiar a adequacao a LGPD (Lei 13.709/2018) e nao
                constituem:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Garantia de conformidade total ou imunidade a sancoes da ANPD</li>
                <li>Assessoria juridica no sentido da Lei 8.906/1994 (Estatuto da OAB)</li>
                <li>Representacao legal do contratante perante orgaos reguladores</li>
              </ul>
              <p className="mt-3">
                A implementacao efetiva das recomendacoes depende da colaboracao ativa do contratante
                e de sua equipe interna.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Contratacao</h2>
              <p>
                A contratacao e formalizada por proposta comercial e contrato de prestacao de
                servicos assinados pelas partes. O Plano Essencial tem vigencia de 24 meses, com
                valores definidos no contrato. Modificacoes de escopo devem ser formalizadas por
                aditivo contratual.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Direito de arrependimento
              </h2>
              <p>
                Para contratos celebrados fora do estabelecimento comercial ou por meios eletronicos,
                o contratante pode exercer o direito de arrependimento em ate 7 (sete) dias corridos
                a partir da assinatura, conforme Art. 49 do Codigo de Defesa do Consumidor. Apos
                esse prazo, aplicam-se as clausulas de rescisao previstas no contrato.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Propriedade intelectual
              </h2>
              <p>
                Todo o conteudo deste site — textos, metodologias, modelos de documentos e materiais
                de treinamento — e de titularidade da 4 Pilares Consultoria LTDA. A reproducao,
                distribuicao ou uso comercial sem autorizacao previa e expressamente vedada. Os
                documentos elaborados especificamente para o contratante sao de uso exclusivo deste,
                vedado o compartilhamento com terceiros sem autorizacao.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Limitacao de responsabilidade
              </h2>
              <p>
                A responsabilidade da 4 Pilares Consultoria e limitada ao valor dos servicos
                efetivamente prestados no periodo de 12 meses anteriores ao evento danoso. Nao nos
                responsabilizamos por decisoes tomadas pelo contratante com base nas orientacoes
                recebidas, nem por sancoes impostas por autoridades reguladoras decorrentes de
                descumprimento de recomendacoes fornecidas.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. Uso do site e conduta
              </h2>
              <p className="mb-3">E vedado ao usuario:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Utilizar este site para fins ilegais ou que violem direitos de terceiros</li>
                <li>Tentar acessar areas restritas sem autorizacao</li>
                <li>Transmitir malware, virus ou codigo malicioso</li>
                <li>Realizar engenharia reversa do sistema</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">9. Lei aplicavel e foro</h2>
              <p>
                Estes termos sao regidos pela legislacao brasileira. Para resolucao de controversias,
                as partes elegem o foro da comarca de Palmas/TO, com renuria expressa a qualquer
                outro, por mais privilegiado que seja.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">10. Contato</h2>
              <p>
                Para questoes sobre estes termos, entre em contato pelo e-mail{" "}
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
