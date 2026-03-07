export interface SimulationOption {
  term: number;
  monthlyRate: number;
  cetAnnual: number;
  installment: number;
  totalAmount: number;
}

export interface SimulationResult {
  options: SimulationOption[];
  amount: number;
}

export interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface ContactData {
  fullName: string;
  phone: string;
  email: string;
  whatsappOptIn: boolean;
}

export interface IdentificationData {
  cpf: string;
  birthDate: string;
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  creditCheckConsent: boolean;
}

export interface FinancialData {
  incomeRange: string;
  occupation: string;
  loanPurpose: string;
}

export const INCOME_RANGES = [
  "Até R$ 1.500",
  "R$ 1.500 a R$ 3.000",
  "R$ 3.000 a R$ 5.000",
  "R$ 5.000 a R$ 8.000",
  "R$ 8.000 a R$ 12.000",
  "Acima de R$ 12.000",
] as const;

export const OCCUPATIONS = [
  "Empregado CLT",
  "Autônomo / MEI",
  "Servidor Público",
  "Empresário",
  "Aposentado / Pensionista",
  "Profissional Liberal",
  "Produtor Rural / Agricultura Familiar",
  "Empreendedor Social",
  "Outro",
] as const;

export const LOAN_PURPOSES = [
  "Negócio de impacto social",
  "Energia solar / Sustentabilidade",
  "Investir no negócio",
  "Educação",
  "Saúde",
  "Reforma / Melhoria da casa",
  "Quitar dívidas",
  "Agricultura familiar",
  "Emergência",
  "Outro",
] as const;

export const ODS_GOALS = [
  { number: 1, title: "Erradicação da Pobreza", color: "#E5243B" },
  { number: 5, title: "Igualdade de Gênero", color: "#FF3A21" },
  { number: 7, title: "Energia Limpa e Acessível", color: "#FCC30B" },
  { number: 8, title: "Trabalho Decente e Crescimento Econômico", color: "#A21942" },
  { number: 9, title: "Indústria, Inovação e Infraestrutura", color: "#FD6925" },
  { number: 10, title: "Redução das Desigualdades", color: "#DD1367" },
  { number: 11, title: "Cidades e Comunidades Sustentáveis", color: "#FD9D24" },
  { number: 13, title: "Ação Contra a Mudança Global do Clima", color: "#3F7E44" },
  { number: 17, title: "Parcerias e Meios de Implementação", color: "#19486A" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "O que é o Empréstimo Social e qual sua relação com os ODS da ONU?",
    answer: "O Empréstimo Social é uma plataforma de crédito pessoal alinhada aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Oferecemos linhas de crédito de R$ 300 a R$ 10.000 com foco em inclusão financeira, apoio a negócios de impacto social e projetos sustentáveis, seguindo a Agenda 2030 das Nações Unidas."
  },
  {
    question: "O que são os ODS (Objetivos de Desenvolvimento Sustentável)?",
    answer: "Os ODS são 17 metas globais estabelecidas pela ONU em 2015 como parte da Agenda 2030. Eles visam erradicar a pobreza, proteger o planeta e garantir prosperidade para todos. O Empréstimo Social se alinha especialmente ao ODS 8 (Trabalho Decente e Crescimento Econômico), ODS 10 (Redução das Desigualdades) e ODS 17 (Parcerias para Implementação)."
  },
  {
    question: "Preciso de CPF para simular?",
    answer: "Não! A simulação é totalmente livre e não exige nenhum dado pessoal. O CPF só será solicitado na etapa de proposta, quando você decidir prosseguir."
  },
  {
    question: "Qual a taxa de juros?",
    answer: "Nossas taxas variam de 2,49% a 5,99% ao mês, dependendo do valor solicitado, prazo escolhido e perfil de crédito. Projetos com impacto social ou ambiental comprovado podem ter condições diferenciadas. O Custo Efetivo Total (CET) é sempre informado antes da contratação."
  },
  {
    question: "O que é o microcrédito inspirado no modelo Yunus?",
    answer: "Muhammad Yunus, Nobel da Paz, criou o Grameen Bank para oferecer microcrédito a populações de baixa renda, especialmente mulheres. Esse modelo é referência na meta ODS 8.10 da ONU. O Empréstimo Social se inspira nessa filosofia para democratizar o acesso ao crédito no Brasil."
  },
  {
    question: "Como meu empréstimo contribui para o desenvolvimento sustentável?",
    answer: "Ao utilizar o Empréstimo Social, você faz parte de um ecossistema que prioriza o crédito responsável. Parte dos recursos é direcionada a projetos de impacto, como energia solar, agricultura familiar e empreendedorismo feminino, alinhados à Agenda 2030 da ONU."
  },
  {
    question: "A aprovação é garantida?",
    answer: "Não. Toda solicitação passa por uma análise de crédito. A aprovação depende do perfil financeiro do solicitante. Nosso compromisso é com a transparência e a inclusão financeira responsável."
  },
  {
    question: "Quanto tempo leva a análise?",
    answer: "O prazo estimado para análise é de até 3 dias úteis após o envio completo da proposta. Você será notificado por e-mail sobre o resultado."
  },
  {
    question: "O seguro é obrigatório?",
    answer: "Não. O seguro é totalmente opcional e não influencia na análise ou aprovação do seu empréstimo. Ele oferece uma proteção adicional por um valor fixo de R$ 19,00, cobrindo situações como desemprego involuntário e incapacidade temporária."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim. Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD). Seus dados são criptografados e utilizados exclusivamente para a análise de crédito. Consulte nossa Política de Privacidade."
  },
  {
    question: "Posso antecipar parcelas?",
    answer: "Sim! Você pode antecipar parcelas a qualquer momento, com desconto proporcional dos juros conforme previsto no Código de Defesa do Consumidor."
  },
  {
    question: "Como entro em contato?",
    answer: "Você pode entrar em contato conosco pelo e-mail contato@emprestimosocial.com.br ou pelo telefone 0800-644-1600 (opção 2), de segunda a sexta, das 9h às 18h."
  },
] as const;
