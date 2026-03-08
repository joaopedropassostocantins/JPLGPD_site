import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Search, Users, GraduationCap, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD";

export default function Transparencia() {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-3 mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossos Servicos
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Solucoes completas de consultoria em privacidade e protecao de dados
                para sua empresa se adequar a LGPD.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "DPO as a Service",
                  items: [
                    "Atuacao como Encarregado de Dados Pessoais (DPO) terceirizado",
                    "Designacao formal conforme Art. 41 da LGPD",
                    "Canal de atendimento ao titular de dados",
                    "Interlocucao com a ANPD quando necessario",
                    "Gestao de solicitacoes de titulares dentro dos prazos legais",
                    "Relatorios periodicos de atividades do DPO",
                  ],
                },
                {
                  icon: FileText,
                  title: "Documentacao LGPD",
                  items: [
                    "Politica de Privacidade",
                    "Termos de Uso",
                    "RIPD — Relatorio de Impacto a Protecao de Dados",
                    "ROPA — Registro de Atividades de Tratamento",
                    "Politica interna de protecao de dados",
                    "Contratos de processamento de dados (DPA)",
                    "Clausulas contratuais para fornecedores",
                  ],
                },
                {
                  icon: Search,
                  title: "Auditoria e Conformidade",
                  items: [
                    "Diagnostico de maturidade em privacidade",
                    "Gap analysis (analise de lacunas)",
                    "Plano de acao com priorizacao de riscos",
                    "Acompanhamento de implementacao de controles",
                    "Auditoria periodica de conformidade",
                    "Apoio a resposta a incidentes de seguranca",
                  ],
                },
                {
                  icon: GraduationCap,
                  title: "Treinamentos",
                  items: [
                    "Treinamento de conscientizacao LGPD para equipes",
                    "Capacitacao de gestores e lideres",
                    "Workshop de resposta a incidentes",
                    "Treinamento sobre direitos dos titulares",
                    "Material didatico e certificado de participacao",
                  ],
                },
              ].map((service) => (
                <Card key={service.title}>
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Shield className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Plano Essencial */}
            <Card className="mt-8 border-primary">
              <CardContent className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl font-bold text-foreground">Plano Essencial</h2>
                <p className="text-muted-foreground">
                  O Plano Essencial reune os servicos mais demandados em um pacote acessivel
                  para pequenas e medias empresas.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Primeiros 12 meses</p>
                    <p className="font-semibold text-foreground text-xl">R$ 150/mes</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Meses 13 a 24</p>
                    <p className="font-semibold text-foreground text-xl">R$ 300/mes</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Contrato</p>
                    <p className="font-semibold text-foreground">24 meses</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Valor total</p>
                    <p className="font-semibold text-foreground">R$ 5.400</p>
                  </div>
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="font-semibold mt-2">
                    Solicitar proposta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-4 text-xs text-muted-foreground leading-relaxed text-center mt-8">
              <p>4 Pilares Consultoria LTDA | CNPJ: 58.551.044/0001-90</p>
              <p className="mt-2">
                Os servicos de consultoria visam apoiar a adequacao a LGPD e nao constituem
                garantia de conformidade total. A implementacao depende da colaboracao ativa do contratante.
              </p>
              <p className="mt-1">Ultima atualizacao: Marco de 2026</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
