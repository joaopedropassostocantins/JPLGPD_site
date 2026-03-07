# Revisão Comercial — 4 Pilares Consultoria

**Data:** 2026-03-07

---

## Regra Comercial Oficial (Plano Essencial)

- Contrato: **24 meses**
- Primeiros 12 meses: **R$ 150/mês** (50% de desconto)
- Meses 13 a 24: **R$ 300/mês** (valor integral)
- Valor total do contrato: **R$ 5.400**
- Ticket médio efetivo: **R$ 225/mês**

---

## Problemas Encontrados e Correções

### 1. checkout.html — Plano Básico ANPD
- **Arquivo:** `06-checkout-e-pagamento/files_origem/checkout.html`
- **Texto antigo:** "R$150/mês por 12 meses, depois R$299/mês"
- **Problema:** Preço pós-desconto R$299 (deveria ser R$300), prazo apenas 12 meses (deveria ser 24)
- **Solução:** Corrigido para R$150/mês nos primeiros 12 meses, R$300/mês nos meses 13-24, contrato de 24 meses
- **Status:** Corrigido nesta sprint

### 2. checkout.html — Planos Essencial, Profissional, Empresarial
- **Arquivo:** `06-checkout-e-pagamento/files_origem/checkout.html`
- **Texto antigo:** Essencial R$997/mês, Profissional R$1.997/mês, Empresarial R$3.997/mês
- **Problema:** Planos não existem na regra comercial atual
- **Solução:** Removidos. Mantido apenas o Plano Essencial alinhado à regra oficial
- **Status:** Corrigido nesta sprint

### 3. JP.LGPD.txt — Oferta lançamento
- **Arquivo:** `01-visao-geral/JP.LGPD.txt`
- **Texto antigo:** "DPO Certificado R$ 299/mês (primeiros 6 meses)"
- **Problema:** Preço R$299 e prazo 6 meses divergem da regra oficial
- **Solução:** Arquivo mantido como documento histórico; não é material público
- **Observação:** Requer revisão humana se for reutilizado

### 4. 4pilares-lgpd-v2.html — Diferencial
- **Arquivo:** `06-checkout-e-pagamento/files_origem/4pilares-lgpd-v2.html` e `02-site-html/site_origem/index.html`
- **Texto antigo:** "DPO certificado a partir de R$ 299/mês"
- **Problema:** Preço diverge da regra oficial
- **Solução:** Corrigido para "a partir de R$ 150/mês" com nota sobre contrato de 24 meses
- **Status:** Corrigido nesta sprint

### 5. Home.tsx — Conteúdo inteiro
- **Arquivo:** `02-site-html/site_origem/Home.tsx`
- **Texto antigo:** Toda a página fala de empréstimo pessoal, ODS, crédito sustentável
- **Problema:** Produto completamente errado
- **Solução:** Reescrita total para consultoria LGPD / 4 Pilares
- **Status:** Corrigido nesta sprint

### 6. Header.tsx — Marca e selos
- **Arquivo:** `02-site-html/site_origem/Header.tsx`
- **Texto antigo:** "EmprestimoSocial.org", "Nota máxima Reclame Aqui", "+12.000 clientes"
- **Problema:** Marca e claims de empresa de empréstimo
- **Solução:** Substituído por 4 Pilares Consultoria, claims reais e seguros
- **Status:** Corrigido nesta sprint

### 7. Footer.tsx — Marca e descrição
- **Arquivo:** `02-site-html/site_origem/Footer.tsx`
- **Texto antigo:** "Empréstimo Social LTDA", CNPJ 23.952.238/0001-12
- **Problema:** Entidade jurídica errada
- **Solução:** Substituído por 4 Pilares Consultoria, CNPJ 58.551.044/0001-90
- **Status:** Corrigido nesta sprint

### 8. FAQ — loan-types.ts
- **Arquivo:** `02-site-html/site_origem/loan-types.ts`
- **Texto antigo:** FAQ inteiro sobre empréstimo social, ODS, Yunus
- **Problema:** FAQ de produto errado
- **Solução:** Reescrito com FAQ de consultoria LGPD
- **Status:** Corrigido nesta sprint
