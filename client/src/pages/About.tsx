import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Users, ClipboardCheck } from "lucide-react";

const WA_LINK =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20LGPD";

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container max-w-3xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Sobre a 4 Pilares</h1>
          <p className="text-lg text-slate-300">
            Consultoria especializada em privacidade, protecao de dados e adequacao a LGPD para
            pequenas e medias empresas.
          </p>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <Card>
            <CardContent className="p-6 md:p-10 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">Sobre o Fundador</h2>
                <p className="text-sm text-muted-foreground">
                  4 Pilares Consultoria LTDA · CNPJ: 58.551.044/0001-90
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A 4 Pilares Consultoria foi fundada por{" "}
                <strong className="text-foreground">Dr. Joao Pedro</strong>, profissional com
                formacao juridica e experiencia em protecao de dados pessoais, governanca corporativa
                e conformidade regulatoria. A atuacao combina conhecimento tecnico-juridico com visao
                pratica de negocios, permitindo entregar solucoes adequadas a realidade de cada
                cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A consultoria nasceu da percepcao de que a maioria das PMEs brasileiras nao tem
                acesso a orientacao de qualidade em privacidade de dados — seja por custo, por
                linguagem tecnica excessiva ou por solucoes desproporcionais ao seu porte. A 4
                Pilares existe para preencher essa lacuna.
              </p>
              <p className="text-xs text-muted-foreground italic">
                * Resumo institucional. Informacoes detalhadas disponiveis mediante solicitacao.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MISSAO, VISAO, VALORES */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Missao",
                desc: "Tornar a conformidade com a LGPD acessivel, pratica e proporcional para pequenas e medias empresas brasileiras.",
              },
              {
                title: "Visao",
                desc: "Ser a referencia em consultoria LGPD para PMEs no Brasil, reconhecida pela objetividade e pelo impacto real nos clientes.",
              },
              {
                title: "Valores",
                desc: "Clareza na comunicacao, rigor tecnico-juridico, abordagem pratica e respeito a realidade de cada cliente.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PILARES */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground">Nossa Metodologia</h2>
            <p className="text-muted-foreground mt-2">
              Quatro dimensoes que estruturam toda a nossa atuacao.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scale,
                title: "1. Lei",
                desc: "Entendimento profundo da LGPD e legislacao correlata aplicada ao contexto do cliente.",
                color: "text-blue-600 bg-blue-600/10",
              },
              {
                icon: ClipboardCheck,
                title: "2. Regras",
                desc: "Criacao de politicas, procedimentos e documentos internos adequados ao negocio.",
                color: "text-emerald-600 bg-emerald-600/10",
              },
              {
                icon: Shield,
                title: "3. Conformidade",
                desc: "Implementacao pratica de controles e melhoria continua da maturidade em privacidade.",
                color: "text-amber-600 bg-amber-600/10",
              },
              {
                icon: Users,
                title: "4. Titular",
                desc: "Estruturacao do canal de atendimento e gestao dos direitos dos titulares de dados.",
                color: "text-purple-600 bg-purple-600/10",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 space-y-3">
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Pronto para iniciar sua adequacao a LGPD?
          </h2>
          <p className="text-slate-300">
            Diagnostico inicial sem compromisso. Entenda sua situacao em uma reuniao objetiva.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-emerald-600 hover:bg-emerald-700 font-semibold px-8 h-12">
              Falar com o consultor <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
