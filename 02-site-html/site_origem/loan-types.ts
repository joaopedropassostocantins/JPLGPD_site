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
  "Ate R$ 1.500",
  "R$ 1.500 a R$ 3.000",
  "R$ 3.000 a R$ 5.000",
  "R$ 5.000 a R$ 8.000",
  "R$ 8.000 a R$ 12.000",
  "Acima de R$ 12.000",
] as const;

export const OCCUPATIONS = [
  "Empregado CLT",
  "Autonomo / MEI",
  "Servidor Publico",
  "Empresario",
  "Aposentado / Pensionista",
  "Profissional Liberal",
  "Outro",
] as const;

export const LOAN_PURPOSES = [
  "Adequacao LGPD",
  "DPO as a Service",
  "Documentacao",
  "Auditoria",
  "Treinamento",
  "Outro",
] as const;

export const FAQ_ITEMS = [
  {
    question: "O que e a LGPD e quem precisa se adequar?",
    answer: "A Lei Geral de Protecao de Dados (Lei 13.709/2018) regula o tratamento de dados pessoais no Brasil. Toda organizacao que coleta, armazena ou processa dados pessoais — de clientes, funcionarios ou fornecedores — precisa se adequar, independentemente do porte."
  },
  {
    question: "O que e um DPO / Encarregado de Dados?",
    answer: "O Encarregado de Dados Pessoais (DPO — Data Protection Officer) e o profissional responsavel por atuar como canal de comunicacao entre o controlador, os titulares de dados e a ANPD. A LGPD preve a designacao de um encarregado (Art. 41), cuja obrigatoriedade pode variar conforme o porte e a natureza do tratamento."
  },
  {
    question: "Como funciona o DPO as a Service?",
    answer: "O DPO as a Service e a terceirizacao da funcao de Encarregado. A 4 Pilares atua como DPO terceirizado da sua empresa: fazemos a designacao formal, estruturamos o canal de atendimento ao titular, respondemos solicitacoes e mantemos a interlocucao com a ANPD quando necessario."
  },
  {
    question: "Quanto custa o Plano Essencial?",
    answer: "O Plano Essencial tem contrato de 24 meses, com R$ 150/mes nos primeiros 12 meses (50% de desconto) e R$ 300/mes nos meses 13 a 24. O valor total do contrato e R$ 5.400, com ticket medio efetivo de R$ 225/mes."
  },
  {
    question: "O que esta incluido no Plano Essencial?",
    answer: "O plano inclui: DPO terceirizado com designacao formal, politica de privacidade, termos de uso, RIPD simplificado, ROPA, canal de atendimento ao titular, suporte consultivo mensal e treinamento inicial da equipe."
  },
  {
    question: "Minha empresa e pequena. Preciso de DPO?",
    answer: "Depende. A Resolucao CD/ANPD n. 2/2022 flexibiliza algumas obrigacoes para agentes de tratamento de pequeno porte. No entanto, mesmo empresas pequenas que tratam dados pessoais se beneficiam da estruturacao de boas praticas. Fazemos uma avaliacao caso a caso no diagnostico inicial."
  },
  {
    question: "A consultoria garante conformidade total com a LGPD?",
    answer: "Nao. A adequacao a LGPD e um processo continuo que depende da colaboracao ativa da empresa. Nossa consultoria apoia a implementacao progressiva de boas praticas, documentacao e controles, mas a conformidade plena depende de fatores operacionais do contratante."
  },
  {
    question: "Como comeco?",
    answer: "Entre em contato via WhatsApp ou e-mail para agendar o diagnostico inicial (sem compromisso). Avaliamos a situacao da sua empresa e enviamos uma proposta personalizada com contrato."
  },
  {
    question: "Posso cancelar o contrato?",
    answer: "Sim. O contrato preve clausulas de rescisao com multa proporcional ao tempo restante. Antes do inicio da execucao, aplica-se o direito de arrependimento de 7 dias (CDC). Detalhes completos estarao na proposta contratual."
  },
  {
    question: "Os dados da minha empresa ficam seguros?",
    answer: "Sim. Adotamos medidas tecnicas e organizacionais de seguranca, incluindo criptografia e controles de acesso. Nosso proprio tratamento de dados segue as diretrizes da LGPD. Consulte nossa Politica de Privacidade para mais detalhes."
  },
] as const;
