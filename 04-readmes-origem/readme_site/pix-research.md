# Pesquisa API PIX - Mercado Pago

## Como funciona:
1. Usar SDK `mercadopago` no Node.js
2. Configurar access token via `mercadopago.configurations.setAccessToken()`
3. Criar pagamento com `mercadopago.payment.create(data)` onde:
   - payment_method_id: "pix"
   - transaction_amount: valor
   - description: descrição
   - payer: { email, first_name, last_name, identification: { type, number } }
4. Resposta contém:
   - response.id (ID do pagamento)
   - response.status (pending)
   - response.point_of_interaction.transaction_data.qr_code (PIX copia e cola)
   - response.point_of_interaction.transaction_data.qr_code_base64 (QR Code em base64)
5. Webhook: Mercado Pago envia notificação quando pagamento é confirmado

## SDK v2 (mais recente):
- npm: mercadopago (v2+)
- Usa classes: MercadoPagoConfig, Payment
- Criar: new Payment(client).create({ body: { ... } })

## Limitação de teste:
- Com test users, o PIX fica pendente e NÃO pode ser aprovado via QR Code
- Para testar aprovação, precisa usar API de atualização de status ou webhook mock

## Alternativa: usar API direta sem SDK
- POST https://api.mercadopago.com/v1/payments
- Header: Authorization: Bearer ACCESS_TOKEN
- Body: { payment_method_id: "pix", transaction_amount, description, payer }
- Resposta: mesma estrutura

## Webhook:
- Configurar notification_url no pagamento ou na aplicação
- Mercado Pago envia POST com { action, data: { id } }
- Consultar GET /v1/payments/{id} para obter status atualizado
- Status: pending → approved / rejected / cancelled
