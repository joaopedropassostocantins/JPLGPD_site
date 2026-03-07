# Bloco 1: Arquitetura, Fluxo e Wireframes

Este documento detalha a arquitetura de páginas (sitemap), o fluxo do funil de conversão e os wireframes textuais para o site "Empréstimo Social", conforme especificado no prompt.

## 1. Sitemap (Arquitetura de Páginas)

A estrutura do site será composta pelas seguintes páginas, organizadas de forma lógica para facilitar a navegação e o funil de conversão:

- `/` - **Landing Page:** A página principal, com o simulador e as informações iniciais.
- `/resultado` - **Resultado da Simulação:** Apresenta as opções de empréstimo simuladas.
- `/proposta` - **Formulário de Proposta:** Funil multi-etapas para coleta de dados do usuário.
- `/seguro` - **Oferta do Seguro Opcional:** Página dedicada à oferta do seguro de R$ 19.
- `/privacidade` - **Política de Privacidade:** Página com os termos de privacidade.
- `/termos` - **Termos de Uso:** Página com os termos de uso do serviço.
- `/transparencia` - **Política de Crédito e Transparência:** Detalhes sobre o cálculo de taxas e a política de crédito.

## 2. Fluxo do Funil de Conversão

O fluxo do usuário foi desenhado para ser simples, transparente e otimizado para conversão, minimizando o atrito em cada etapa:

1.  **Atração (Landing Page):** O usuário chega na landing page, onde encontra um simulador rápido e informações claras sobre o produto.
2.  **Simulação (Landing Page):** O usuário interage com o simulador, inserindo o valor e o prazo desejado, e clica em "Ver condições".
3.  **Visualização das Opções (/resultado):** O usuário é direcionado para a página de resultados, onde vê 3 opções de parcelamento com detalhes de taxas (estimadas).
4.  **Início da Proposta (/resultado):** Ao escolher uma das opções, o usuário clica em "Iniciar proposta".
5.  **Coleta de Dados (/proposta):** O usuário preenche um formulário de proposta dividido em etapas (Contato, Identificação, Perfil Financeiro, Revisão).
6.  **Confirmação de Envio (/proposta):** Após o envio, o usuário recebe uma mensagem de confirmação com os próximos passos.
7.  **Oferta Opcional (/seguro):** O usuário é apresentado à oferta opcional do seguro. Ele pode aceitar e gerar um PIX para pagamento ou simplesmente ignorar e finalizar o fluxo.
8.  **Páginas Legais:** A qualquer momento, o usuário pode acessar as páginas de `Privacidade`, `Termos` e `Transparência` a partir do rodapé do site.

## 3. Wireframes Textuais

A seguir, os wireframes textuais para cada página principal do fluxo.

### 3.1. `/` (Landing Page)

```
[Header: Logo | Navegação (Opcional)]

[Seção Hero]
  [Título (H1): Empréstimo Social: crédito consciente e que cabe no seu bolso.]
  [Subtítulo: Simule agora seu empréstimo de R$ 300 a R$ 10.000 com taxas justas e total transparência.]

  [Componente Simulador Rápido]
    [Campo: Valor desejado (slider/input)]
    [Campo: Prazo em meses (select/buttons)]
    [Campo Opcional: Objetivo do empréstimo (select)]
    [Botão CTA Primário: "Ver condições"]
    [Aviso Legal: "Valores ilustrativos e sujeitos à análise de crédito."]

[Seção Benefícios]
  [Título (H2): Por que escolher o Empréstimo Social?]
  [Grid com 3-5 Benefícios]
    - [Ícone + Título: Transparência Total]
      [Texto: Sem surpresas. Você sabe exatamente o que está pagando.]
    - [Ícone + Título: Parcelas Fixas]
      [Texto: Organize seu orçamento com parcelas que não mudam.]
    - [Ícone + Título: Rápido e Digital]
      [Texto: Simule e contrate 100% online, sem burocracia.]

[Seção Como Funciona]
  [Título (H2): Simples em 3 passos]
  [Linha do tempo/Passos]
    1. [Simule e escolha]
    2. [Preencha a proposta]
    3. [Receba o dinheiro]

[Seção Transparência]
  [Título (H2): Nossas Condições]
  [Texto: Oferecemos taxas de juros a partir de X% a.m. e Custo Efetivo Total (CET) a partir de Y% a.a. O prazo para análise é de até Z dias úteis. Leia nossa Política de Crédito.]

[Seção Prova Social (Opcional)]
  [Título (H2): Histórias que inspiram]
  [Card de Depoimento 1 (com aviso "exemplo")]
  [Card de Depoimento 2 (com aviso "exemplo")]

[Seção FAQ]
  [Título (H2): Perguntas Frequentes]
  [Componente Acordeão com 8-12 perguntas e respostas]

[Footer]
  [Logo]
  [Contato: email@emprestimosocial.com]
  [Dados da Empresa: Empréstimo Social LTDA | CNPJ: XX.XXX.XXX/0001-XX (placeholder)]
  [Links Legais: Política de Privacidade | Termos de Uso | Política de Crédito]
  [Copyright]
```

### 3.2. `/resultado` (Resultado da Simulação)

```
[Header]

[Seção Resultado]
  [Título (H1): Condições para seu empréstimo de R$ {valor_simulado}]
  [Subtítulo: Escolha o prazo que melhor se adapta ao seu planejamento.]
  [Aviso: "Esta é uma simulação. As taxas podem variar conforme seu perfil de crédito."]

  [Grid com 3 Cards de Opção]
    [Card 1: Prazo 6x]
      [Parcela: R$ XXX,XX]
      [Taxa a.m.: X,XX%]
      [CET a.a.: Y,YY%]
      [Botão CTA Secundário: "Iniciar proposta"]

    [Card 2: Prazo 12x]
      [Parcela: R$ XXX,XX]
      [Taxa a.m.: X,XX%]
      [CET a.a.: Y,YY%]
      [Botão CTA Primário: "Iniciar proposta"]

    [Card 3: Prazo 18x]
      [Parcela: R$ XXX,XX]
      [Taxa a.m.: X,XX%]
      [CET a.a.: Y,YY%]
      [Botão CTA Secundário: "Iniciar proposta"]

[Footer]
```

### 3.3. `/proposta` (Formulário de Proposta)

```
[Header]

[Componente Stepper: Etapa 1 de 4]

[Formulário - Etapa A: Contato]
  [Título (H1): Vamos começar]
  [Campo: Nome completo]
  [Campo: Celular (com máscara)]
  [Campo: E-mail]
  [Checkbox: "Aceito receber comunicações via WhatsApp."]
  [Botão: "Continuar"]

[Formulário - Etapa B: Identificação]
  [Título (H1): Seus dados]
  [Campo: CPF (com máscara e validação)]
  [Campo: Data de Nascimento]
  [Campo: Endereço (CEP com busca, rua, número, etc.)]
  [Checkbox com texto claro: "Autorizo a consulta aos meus dados em birôs de crédito para análise e prevenção à fraude."]
  [Botão: "Voltar"] [Botão: "Continuar"]

[Formulário - Etapa C: Perfil Financeiro]
  [Título (H1): Sobre sua renda]
  [Campo: Renda mensal (faixa/select)]
  [Campo: Ocupação (select)]
  [Campo: Objetivo do empréstimo (select)]
  [Botão: "Voltar"] [Botão: "Continuar"]

[Formulário - Etapa D: Revisão]
  [Título (H1): Revise e envie]
  [Resumo dos dados informados]
  [Checkbox: "Declaro que todas as informações são verdadeiras."]
  [Checkbox: "Li e aceito os Termos de Uso e a Política de Privacidade."]
  [Botão: "Voltar"] [Botão CTA Primário: "Enviar proposta"]

[Tela de Confirmação (após envio)]
  [Ícone de Sucesso]
  [Título: Solicitação recebida!]
  [Texto: Sua proposta foi enviada com sucesso. Em breve, você receberá um retorno sobre sua análise. Prazo estimado: X dias úteis.]

[Footer]
```

### 3.4. `/seguro` (Oferta Opcional)

```
[Header]

[Seção Oferta]
  [Título (H1): Proteja seu crédito com o Seguro {Nome do Seguro}]
  [Texto Explicativo: O seguro é opcional e oferece cobertura para {coberturas genéricas}. Contratando, você tem mais tranquilidade por um pagamento único de R$ 19,00.]
  [Aviso: "A contratação do seguro não está condicionada à aprovação do seu empréstimo."]

  [Box de Pagamento]
    [Valor: R$ 19,00 (pagamento único)]
    [Botão CTA Primário: "Sim, quero contratar e gerar PIX"]
    [Link/Botão Secundário: "Não, obrigado"]

[Seção PIX (se aceito)]
  [Título: Pague com PIX]
  [QR Code (imagem)]
  [Campo com PIX Copia e Cola + Botão "Copiar"]
  [Status: "Aguardando pagamento..."]
  [Instruções: "Abra o app do seu banco e pague via QR Code ou Copia e Cola. O pagamento é confirmado em instantes."]

[Footer]
```
