# Validação Mercado Pago — Produção

**Data:** 2026-03-07

---

## Arquivos Analisados

| Arquivo | Camada | Função |
|---------|--------|--------|
| `02-site-html/site_origem/mercadopago.ts` | Backend | SDK v2 — cria pagamento PIX, consulta status |
| `02-site-html/site_origem/mercadopago-webhook.ts` | Backend | Webhook IPN para confirmar pagamento |
| `06-checkout-e-pagamento/files_origem/checkout.html` | Frontend | SDK JS v2, Public Key hardcoded |
| `02-site-html/site_origem/pix.ts` | Backend | Estrutura PIX (parcial) |
| `02-site-html/site_origem/products.ts` | Backend | Produto: Seguro R$ 19,00 |
| `02-site-html/site_origem/env.ts` | Backend | Variáveis de ambiente |

---

## Classificação: **PARCIALMENTE ESTRUTURADA**

A integração está **estruturada no código**, mas **não está pronta para produção** do produto correto (consultoria LGPD).

---

## Detalhamento

### Backend (mercadopago.ts)
- **SDK:** `mercadopago` v2 (oficial)
- **Autenticação:** `MERCADOPAGO_ACCESS_TOKEN` via env
- **Método:** `Payment.create()` com `payment_method_id: "pix"`
- **Dados coletados:** email, nome, CPF do pagador
- **Retorno:** paymentId, status, qrCode (copia e cola), qrCodeBase64
- **Verificação de configuração:** `isMercadoPagoConfigured()` presente
- **Sinais de sandbox/produção:** Depende exclusivamente da env var; sem indicador explícito

### Webhook (mercadopago-webhook.ts)
- **Rota:** `POST /api/mercadopago/webhook`
- **Tratamento:** IPN e Webhook format
- **Fluxo:** Recebe notificação → consulta status → marca seguro como PAID → notifica owner
- **Resiliência:** Sempre retorna 200 (evita retries)
- **Validação de assinatura:** **NÃO implementada** (risco de segurança)

### Frontend (checkout.html)
- **SDK:** `https://sdk.mercadopago.com/js/v2`
- **Public Key:** Hardcoded no HTML (padrão normal para frontend)
- **Uso:** Checkout dos planos LGPD (desconectado do backend React)

### Produto Configurado
- **Nome:** "Seguro Proteção Crédito"
- **Valor:** R$ 19,00 (1900 centavos)
- **Tipo:** Seguro opcional de empréstimo
- **Problema:** Este produto é de empréstimo, não de consultoria LGPD

---

## Riscos Identificados

| Risco | Severidade | Descrição |
|-------|-----------|-----------|
| Webhook sem verificação de assinatura | **ALTA** | Qualquer request pode simular pagamento |
| Produto errado configurado | **MÉDIA** | R$ 19 de seguro; precisa ser R$ 150/mês de consultoria |
| Mock payment button em produção | **ALTA** | `[DEV] Simular pagamento recebido` visível no Seguro.tsx |
| Sem retry de webhook | **BAIXA** | MP reenvia automaticamente |
| Sem idempotência explícita | **MÉDIA** | Duplo processamento possível |

---

## O que Falta para Produção Real (Consultoria LGPD)

1. **Reconfigurar produto** — De "Seguro R$ 19" para "Plano Essencial R$ 150/mês"
2. **Implementar assinatura recorrente** — Payment PIX é pontual; para R$ 150/mês precisa de recorrência ou cobranças mensais
3. **Validar webhook com assinatura** — Mercado Pago envia header `x-signature` que deve ser verificado
4. **Remover botão mock** — `handleMockPaid` não pode existir em produção
5. **Testar com Access Token de produção** — Verificar se as credenciais atuais são sandbox ou produção
6. **Configurar notification_url** — Webhook URL precisa ser registrada no painel MP
7. **Implementar lógica de contrato** — 24 meses, mudança de valor no mês 13

---

## Recomendação

A infraestrutura de pagamento (SDK, webhook, banco) é **reutilizável**. Porém, o fluxo atual serve a um produto diferente (seguro de empréstimo). Antes de ir para produção com consultoria LGPD:

1. Redefinir `products.ts` com plano correto
2. Implementar cobrança recorrente (Mercado Pago Subscriptions ou cobranças manuais mensais)
3. Validar assinatura do webhook
4. Remover toda a lógica de "seguro" e "empréstimo"
5. Testar end-to-end em sandbox com valores corretos
