# 4 Pilares Consultoria — Site LGPD

Site comercial-profissional da **4 Pilares Consultoria**, especializada em privacidade e protecao de dados pessoais (LGPD).

## Produto

- **DPO as a Service** — Encarregado de Dados terceirizado
- **Documentacao LGPD** — Politica de privacidade, RIPD, ROPA, termos
- **Auditoria e Conformidade** — Diagnostico, gap analysis, controles
- **Treinamentos** — Capacitacao de equipes sobre LGPD

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 19 + TypeScript + Vite + Tailwind 4 + shadcn/ui |
| Roteamento | Wouter |
| Backend | tRPC + Express + Drizzle ORM |
| Banco | PostgreSQL |
| Pagamentos | Mercado Pago SDK v2 (PIX) + Stripe (Cartao) |
| Analytics | Custom hooks (useAnalytics, useUTM) |

## Estrutura

```
JPLGPD_site/
├── 02-site-html/site_origem/   <- Codigo principal (React + backend)
│   ├── Home.tsx                <- Landing page consultoria LGPD
│   ├── Header.tsx / Footer.tsx <- Marca 4 Pilares
│   ├── Termos.tsx              <- Termos de uso
│   ├── Privacidade.tsx         <- Politica de privacidade
│   ├── Transparencia.tsx       <- Pagina de servicos
│   ├── Admin.tsx               <- Painel administrativo
│   ├── App.tsx                 <- Rotas
│   ├── loan-types.ts           <- Tipos + FAQ
│   ├── mercadopago.ts          <- Integracao PIX
│   └── ...
├── 03-painel/                  <- Painel HTML standalone (referencia)
├── 06-checkout-e-pagamento/    <- Checkout HTML legado
├── docs/                       <- Documentacao do projeto
│   ├── auditoria-repositorio.md
│   ├── revisao-comercial.md
│   ├── revisao-regulatoria.md
│   ├── validacao-mercadopago-producao.md
│   ├── padronizacao-identidade.md
│   ├── copy-home-corrigida.md
│   ├── termo-base.md
│   └── backlog-sprints.md
└── README.md
```

## Rotas

| Rota | Descricao |
|------|-----------|
| `/` | Landing page — consultoria LGPD |
| `/servicos` | Pagina detalhada de servicos |
| `/privacidade` | Politica de privacidade |
| `/termos` | Termos de uso |
| `/admin` | Painel administrativo |
| `/#faq` | Perguntas frequentes |

## Plano Essencial (Regra Comercial)

- Contrato: 24 meses
- R$ 150/mes nos primeiros 12 meses (50% desconto)
- R$ 300/mes nos meses 13 a 24
- Total: R$ 5.400

## Como Rodar

```bash
cd 02-site-html/site_origem
npm install
npm run dev
```

## Pendencias

- [ ] Definir WhatsApp e telefone reais
- [ ] Fornecer/criar logo da marca
- [ ] Definir e registrar dominio
- [ ] Revisao juridica do termo-base
- [ ] Configurar Mercado Pago producao
- [ ] Implementar checkout funcional para Plano Essencial
- [ ] Deploy

## Identidade

- **Marca:** 4 Pilares Consultoria
- **CNPJ:** 58.551.044/0001-90
- **E-mail:** contato@4pilaresconsultoria.com.br
- **Privacidade:** privacidade@4pilaresconsultoria.com.br
