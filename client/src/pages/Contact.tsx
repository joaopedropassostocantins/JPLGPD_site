import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD";

export default function Contact() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container max-w-2xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Entre em Contato</h1>
          <p className="text-lg text-slate-300">
            Solicite o diagnostico inicial sem compromisso. Respondemos em ate 1 dia util.
          </p>
        </div>
      </section>

      {/* CANAIS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Canal preferencial. Resposta rapida em horario comercial.
                  </p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 font-semibold">
                      Abrir conversa <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">E-mail</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para solicitacoes formais ou envio de documentos.
                  </p>
                  <a href="mailto:contato@4pilaresconsultoria.com.br">
                    <Button variant="outline" className="w-full font-semibold">
                      contato@4pilaresconsultoria.com.br
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold text-foreground">Horario de atendimento</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Segunda a sexta-feira, das 9h as 18h (horario de Brasilia). Mensagens recebidas fora
                desse horario serao respondidas no proximo dia util.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">O que esperar do diagnostico inicial</h2>
            <p className="text-muted-foreground leading-relaxed">
              O diagnostico inicial e uma reuniao objetiva de 30 a 60 minutos (presencial ou
              online) onde avaliamos:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Quais dados pessoais sua empresa coleta e processa",
                "Se voce ja possui documentacao LGPD (politica de privacidade, RIPD, ROPA)",
                "Se ha um DPO / Encarregado designado formalmente",
                "Principais riscos e gaps de conformidade identificados",
                "Recomendacoes iniciais sem custo ou compromisso",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic">
              Apos o diagnostico, enviamos uma proposta comercial detalhada e a minuta do contrato
              para sua analise — sem qualquer obrigacao de contratacao.
            </p>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-emerald-600 hover:bg-emerald-700 font-semibold px-8 h-12">
                Agendar diagnostico <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t space-y-1 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">4 Pilares Consultoria LTDA</strong>
            </p>
            <p>CNPJ: 58.551.044/0001-90</p>
            <p>
              E-mail geral:{" "}
              <a
                href="mailto:contato@4pilaresconsultoria.com.br"
                className="text-primary hover:underline"
              >
                contato@4pilaresconsultoria.com.br
              </a>
            </p>
            <p>
              E-mail privacidade/DPO:{" "}
              <a
                href="mailto:privacidade@4pilaresconsultoria.com.br"
                className="text-primary hover:underline"
              >
                privacidade@4pilaresconsultoria.com.br
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
