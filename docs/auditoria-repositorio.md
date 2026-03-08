# Auditoria do Repositório — JPLGPD_site / 4 Pilares Consultoria

**Data:** 2026-03-07
**Branch:** claude/update-jplgpd-site-d5xxk
**Autor:** Auditoria automatizada

---

## 1. Stack Real Detectada

| Camada | Tecnologia | Localização |
|--------|-----------|-------------|
| Frontend (legado) | HTML/CSS/JS puro | `02-site-html/site_origem/index.html`, `06-checkout-e-pagamento/` |
| Frontend (React) | React 19 + TypeScript + Vite + Tailwind 4 + shadcn/ui | `02-site-html/site_origem/*.tsx` |
| Roteamento | Wouter | `App.tsx` |
| Backend | tRPC + Express + Drizzle ORM | `routers.ts`, `index.ts`, `db.ts` |
| Banco de Dados | PostgreSQL (via Drizzle) | `schema.ts`, `0001-0004*.sql` |
| Pagamentos | Mercado Pago SDK v2 (PIX) + Stripe (Cartão) | `mercadopago.ts`, `stripe.ts` |
| Webhooks | Express (MP + Stripe) | `mercadopago-webhook.ts`, `webhook.ts` |
| Painel Admin | HTML standalone + React Admin | `03-painel/4pilares-painel.html`, `Admin.tsx` |
| Analytics | Custom hooks | `useAnalytics.ts`, `useUTM.ts` |

## 2. Estrutura do Projeto

```
JPLGPD_site/
├── 01-visao-geral/          → Briefing original (JP.LGPD.txt)
├── 02-site-html/
│   └── site_origem/         → Código principal React + HTML legado (index.html)
├── 03-painel/
│   ├── 4pilares-painel.html → Painel HTML standalone (dark mode)
│   └── painel_origem/       → Cópia duplicada de 02-site-html/site_origem
├── 04-readmes-origem/       → READMEs originais (site + painel)
├── 05-arquitetura-e-notas/  → manifest.json do pacote
├── 06-checkout-e-pagamento/
│   └── files_origem/        → checkout.html + 4pilares-lgpd-v2.html
├── 07-zips-origem/          → (vazio — ZIPs originais)
├── painel/                  → Symlink ou cópia de 02-site-html/site_origem
├── docs/                    → Documentação nova (este arquivo)
├── README.md                → Mínimo (2 linhas)
└── README_PACOTE.md         → Instruções de pacote
```

## 3. Páginas Públicas Atuais (React)

| Rota | Componente | Propósito Atual |
|------|-----------|----------------|
| `/` | `Home.tsx` | Landing de **empréstimo pessoal / crédito ODS** (NÃO consultoria LGPD) |
| `/resultado` | `Resultado.tsx` | Resultado de simulação de empréstimo |
| `/proposta` | `Proposta.tsx` | Formulário de proposta de crédito |
| `/seguro` | `Seguro.tsx` | Seguro opcional R$ 19,00 (PIX/Stripe) |
| `/privacidade` | `Privacidade.tsx` | Política de privacidade (Empréstimo Social LTDA) |
| `/termos` | `Termos.tsx` | Termos de uso (Empréstimo Social LTDA) |
| `/transparencia` | `Transparencia.tsx` | Página ODS/Transparência/Crédito |
| `/admin` | `Admin.tsx` | Painel administrativo |

## 4. Páginas HTML Legado

| Arquivo | Propósito |
|---------|----------|
| `index.html` (site_origem) | Site LGPD 4 Pilares — DPO Certificado (HTML puro) |
| `4pilares-lgpd-v2.html` | Mesmo conteúdo que index.html |
| `checkout.html` | Checkout com planos LGPD (Básico, Essencial, Profissional, Empresarial) |
| `4pilares-painel.html` | Painel de controle dark mode (HTML puro) |

## 5. Componentes Principais

- **Layout.tsx** — wrapper com Header + Footer
- **Header.tsx** — marca "EmprestimoSocial.org", 0800, Reclame Aqui, +12.000 clientes
- **Footer.tsx** — marca "Empréstimo Social LTDA", CNPJ 23.952.238/0001-12, ODS badges
- **DashboardLayout.tsx** — layout genérico com sidebar (não usado no admin atual)

## 6. Integrações de Pagamento

### Mercado Pago
- `mercadopago.ts` — SDK v2, cria pagamento PIX real via `Payment.create()`
- `mercadopago-webhook.ts` — webhook IPN para confirmar pagamento de seguro
- Variável: `MERCADOPAGO_ACCESS_TOKEN` (env)
- **Uso atual:** pagamento de seguro opcional de R$ 19,00

### Stripe
- `stripe.ts` — SDK Stripe, `STRIPE_SECRET_KEY` (env)
- `webhook.ts` — webhook de checkout session
- **Uso atual:** pagamento alternativo de seguro R$ 19,00 via cartão

### Checkout HTML
- `checkout.html` — Mercado Pago JS SDK v2 (frontend)
- Public Key hardcoded: `APP_USR-...` (encontrada no checkout.html)
- **Uso:** checkout de planos LGPD (não conectado ao React)

## 7. Páginas Legais

| Página | Entidade Referida | Problema |
|--------|------------------|----------|
| Termos.tsx | Empréstimo Social LTDA | Fala de empréstimo, seguro R$ 19, crédito pessoal |
| Privacidade.tsx | Empréstimo Social LTDA | Fala de análise de crédito, birôs, PIX |
| Transparencia.tsx | Empréstimo Social | Toda sobre ODS/crédito sustentável |

## 8. Conflitos Conceituais Detectados

### CRÍTICO: Dois produtos completamente diferentes no mesmo repositório

| Aspecto | Produto A (HTML legado) | Produto B (React ativo) |
|---------|------------------------|------------------------|
| **Produto** | Consultoria LGPD / DPO as a Service | Empréstimo pessoal / Crédito ODS |
| **Marca** | 4 Pilares LGPD | EmprestimoSocial.org |
| **CNPJ** | 58.551.044/0001-90 | 23.952.238/0001-12 |
| **Oferta** | Planos de R$ 150 a R$ 3.997/mês | Empréstimos R$ 300 a R$ 10.000 |
| **Modelo** | Assinatura B2B | Crédito pessoal B2C |
| **Narrativa** | LGPD, DPO, conformidade | ODS ONU, Yunus, microcrédito |

### O site React ATIVO é de empréstimo pessoal, NÃO de consultoria LGPD.

## 9. Conflitos de Pricing

| Local | Preço | Prazo | Conflito |
|-------|-------|-------|----------|
| checkout.html — Básico ANPD | R$ 150/mês (50% off de R$ 299) | 12 meses, depois R$ 299 | Prazo 12 meses, não 24 |
| checkout.html — Essencial | R$ 997/mês | 12 meses | Não existe na regra oficial |
| checkout.html — Profissional | R$ 1.997/mês | 12 meses | Não existe na regra oficial |
| checkout.html — Empresarial | R$ 3.997/mês | 12 meses | Não existe na regra oficial |
| JP.LGPD.txt | R$ 299/mês (6 meses promo) | 6 meses | Prazo e valor divergentes |
| 4pilares-lgpd-v2.html | R$ 299/mês | Vários | Conflita com R$ 150 e 24 meses |
| **Regra oficial** | **R$ 150/mês (12m) → R$ 300/mês (12m)** | **24 meses** | **Nenhum arquivo está correto** |

## 10. Conflitos Contratuais

- Termos.tsx fala de "empréstimo social", não de consultoria LGPD
- Não existe contrato de prestação de serviços LGPD
- Seguro de R$ 19 não faz sentido para consultoria LGPD
- Direito de arrependimento de 7 dias mencionado é para crédito, não para serviços

## 11. Conflitos de Branding

| Elemento | Valor Atual (React) | Valor Atual (HTML) | Correto |
|----------|--------------------|--------------------|---------|
| Marca | EmprestimoSocial.org | 4 Pilares LGPD | 4 Pilares Consultoria |
| CNPJ | 23.952.238/0001-12 | 58.551.044/0001-90 | A definir |
| E-mail | contato@emprestimosocial.com.br | — | A definir |
| Telefone | 0800-644-1600 | — | A definir |
| Logo | Logo de empréstimo (Manus CDN) | — | Necessita atualização |

---

## MATRIZ DE DECISÃO

### Páginas

| Componente | Decisão | Justificativa |
|-----------|---------|---------------|
| Home.tsx | **RECRIAR** | Conteúdo 100% de empréstimo; deve ser landing de consultoria LGPD |
| Resultado.tsx | **REMOVER/ADAPTAR** | Simulação de empréstimo; não se aplica |
| Proposta.tsx | **REMOVER/ADAPTAR** | Proposta de crédito; não se aplica |
| Seguro.tsx | **REMOVER** | Seguro de empréstimo; não faz sentido |
| Privacidade.tsx | **ADAPTAR** | Manter estrutura, reescrever conteúdo para 4 Pilares |
| Termos.tsx | **ADAPTAR** | Manter estrutura, reescrever para consultoria LGPD |
| Transparencia.tsx | **ADAPTAR** | Converter para página institucional/serviços |
| Admin.tsx | **MANTER** | Funcional, adaptar labels depois |

### Componentes

| Componente | Decisão | Justificativa |
|-----------|---------|---------------|
| Header.tsx | **ADAPTAR** | Mudar marca, links, selos, telefone |
| Footer.tsx | **ADAPTAR** | Mudar marca, CNPJ, descrição, links |
| Layout.tsx | **MANTER** | Wrapper genérico, OK |
| DashboardLayout.tsx | **MANTER** | Reutilizável para admin |

### Copy

| Área | Decisão | Justificativa |
|------|---------|---------------|
| Hero | **RECRIAR** | Toda sobre empréstimo |
| FAQ | **RECRIAR** | FAQ de empréstimo e ODS |
| ODS Section | **REMOVER** | Não pertence ao produto LGPD |
| Depoimentos | **REMOVER** | Fictícios e sobre empréstimo |
| loan-types.ts | **ADAPTAR** | Substituir FAQ, remover ODS_GOALS, adaptar tipos |

### Rotas

| Rota | Decisão | Nova Rota |
|------|---------|-----------|
| / | **RECRIAR** | / (home consultoria LGPD) |
| /resultado | **REMOVER** | — |
| /proposta | **ADAPTAR** | /contato ou /diagnostico |
| /seguro | **REMOVER** | — |
| /privacidade | **ADAPTAR** | /privacidade |
| /termos | **ADAPTAR** | /termos |
| /transparencia | **ADAPTAR** | /servicos |
| /admin | **MANTER** | /admin |

### Pagamentos

| Elemento | Decisão | Justificativa |
|---------|---------|---------------|
| Mercado Pago (backend) | **MANTER** | Reutilizável para cobrança de planos |
| Stripe (backend) | **MANTER** | Alternativa de pagamento |
| Seguro R$ 19 (fluxo) | **REMOVER** | Não se aplica |
| checkout.html | **ADAPTAR** | Alinhar planos ao Essencial 24 meses |

### Painel

| Elemento | Decisão | Justificativa |
|---------|---------|---------------|
| Admin.tsx | **MANTER** | Funcional, adaptar depois |
| 4pilares-painel.html | **MANTER** | Referência visual, útil |

### Docs

| Elemento | Decisão | Justificativa |
|---------|---------|---------------|
| 01-visao-geral/ | **MANTER** | Histórico útil |
| 04-readmes-origem/ | **MANTER** | Referência |
| README.md | **RECRIAR** | Praticamente vazio |
| README_PACOTE.md | **MANTER** | Instruções de setup |

### Branding

| Elemento | Decisão | Ação |
|---------|---------|------|
| Nome da marca | **CORRIGIR** | → 4 Pilares Consultoria |
| CNPJ | **PADRONIZAR** | → 58.551.044/0001-90 (do site LGPD) |
| E-mail | **PADRONIZAR** | → contato@4pilaresconsultoria.com.br |
| Logo | **ATUALIZAR** | Remover logo de empréstimo |
| Selos ODS | **REMOVER** | Não pertencem ao produto |
