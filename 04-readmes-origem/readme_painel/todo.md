# Empréstimo Social - TODO

## Banco de Dados e Backend
- [x] Schema Drizzle: tabelas proposals, insurance_payments, leads
- [x] Migrations SQL aplicadas
- [x] Query helpers em server/db.ts
- [x] tRPC route: simulate (cálculo Price com taxa/CET)
- [x] tRPC route: proposal (criar/salvar proposta multi-etapas)
- [x] tRPC route: insurance opt-in
- [x] tRPC route: gerar PIX payload com CRC16 e TXID
- [x] tRPC route: webhook mock-paid (status PAID)
- [x] Utilitário de geração de payload PIX + CRC16
- [x] Validação de CPF server-side
- [x] Rate limiting in-memory para endpoints sensíveis
- [x] Notificação ao owner quando nova proposta é enviada

## Frontend - Design System e Layout
- [x] Design system: paleta fintech (verde/azul confiável), tipografia, espaçamentos
- [x] Tema CSS customizado em index.css (cores OKLCH)
- [x] Layout global: Header + Footer com links legais
- [x] Componentes base: Simulator slider, OptionCards, Stepper, FAQ Accordion, PixBox

## Frontend - Páginas
- [x] Landing Page (/) com Hero + Simulador rápido
- [x] Seção Benefícios (4 cards)
- [x] Seção Como Funciona (3 passos)
- [x] Seção Transparência (taxas/CET)
- [x] Seção Prova Social (depoimentos com aviso "exemplo")
- [x] Seção FAQ (12 perguntas)
- [x] Página Resultado (/resultado) com 3 cards de opção
- [x] Página Proposta (/proposta) multi-etapas
- [x] Etapa A: Contato (nome, celular, email, opt-in WhatsApp)
- [x] Etapa B: Identificação (CPF validado, data nascimento, endereço com busca CEP)
- [x] Etapa C: Perfil Financeiro (renda, ocupação, objetivo)
- [x] Etapa D: Revisão e envio (resumo + aceites)
- [x] Tela de confirmação pós-envio
- [x] Página Seguro (/seguro) com oferta opcional
- [x] Geração de QR Code PIX client-side
- [x] PIX copia e cola com botão copiar
- [x] Status de pagamento (aguardando/pago)

## Páginas Legais
- [x] Política de Privacidade (/privacidade)
- [x] Termos de Uso (/termos)
- [x] Política de Crédito/Transparência (/transparencia)

## Integrações e Compliance
- [x] Integração ViaCEP para busca automática de endereço
- [x] Captura de UTM params na landing
- [x] Analytics GA4: eventos do funil (simulate, view_result, start_proposal, etc.)
- [x] Honeypot fields em formulários
- [x] Validação CPF/telefone/email client-side
- [x] Textos de consentimento LGPD
- [x] SEO: metatags, OpenGraph

## Testes
- [x] Testes unitários: simulador (cálculo Price)
- [x] Testes unitários: geração PIX payload + CRC16
- [x] Testes unitários: validação CPF
- [x] Teste do fluxo completo (simular → resultado → proposta → seguro)

## Responsividade
- [x] Mobile-first em todas as páginas
- [x] Acessibilidade: labels, aria, focus states

## Integração Stripe
- [x] Adicionar feature Stripe ao projeto (webdev_add_feature)
- [x] Configurar secrets (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, VITE_STRIPE_PUBLISHABLE_KEY)
- [x] Criar rota tRPC para criar Stripe Checkout Session (seguro R$ 19,00)
- [x] Criar webhook handler para confirmar pagamento Stripe
- [x] Adicionar botão "Pagar com cartão" na página de seguro
- [x] Criar página de sucesso pós-pagamento Stripe
- [x] Atualizar status do seguro no banco ao receber webhook
- [x] Testes unitários para rotas Stripe

## Rebranding ODS/ONU
- [x] Reformular Hero da Landing Page com narrativa ODS/crédito sustentável
- [x] Nova seção: ODS da ONU (ODS 8, 17, Agenda 2030)
- [x] Atualizar seção Benefícios com foco em impacto social/ambiental
- [x] Atualizar seção Como Funciona com referências a microcrédito e Yunus
- [x] Atualizar seção Transparência com alinhamento ODS
- [x] Atualizar FAQ com perguntas sobre ODS e crédito sustentável
- [x] Atualizar seção Prova Social com depoimentos de impacto
- [x] Atualizar página Resultado com badges ODS
- [x] Atualizar página Proposta com contexto ODS
- [x] Atualizar página Seguro com narrativa de proteção social
- [x] Atualizar página Transparência legal com referências ODS/Agenda 2030
- [x] Atualizar Header/Footer com identidade ODS
- [x] Finalizar integração Stripe na página de seguro

## Atualização CNPJ/Contato + Pagamento 100%
- [x] Atualizar CNPJ para 23.952.238/0001-12 em todo o site
- [x] Atualizar contato para 0800-644-1600 - opção 2 em todo o site
- [x] Verificar e garantir fluxo Stripe 100% funcional
- [x] Verificar e garantir fluxo PIX 100% funcional
- [x] Verificar webhook Stripe registrado corretamente
- [x] Testar compilação sem erros TypeScript
- [x] Rodar testes unitários

## Painel Administrativo
- [x] Rotas tRPC admin protegidas (adminProcedure)
- [x] Query: listar todas as propostas com paginação e filtros
- [x] Query: estatísticas do dashboard (total, por status, valor total, seguros)
- [x] Mutation: atualizar status da proposta (PENDING → APPROVED → REJECTED → FUNDED)
- [x] Mutation: exportar propostas em CSV
- [x] Página Admin Dashboard com cards de estatísticas
- [x] Tabela de propostas com filtros (status, data, busca por nome/CPF)
- [x] Modal/drawer de detalhes da proposta com dados completos
- [x] Indicador de seguro pago/pendente em cada proposta
- [x] Proteção de rota admin (apenas role=admin)
- [x] Registrar rotas no App.tsx
- [x] Testes unitários das rotas admin

## Reestruturação Fluxo Seguro
- [x] Mover seguro para dentro do formulário de proposta (antes da revisão)
- [x] Novo fluxo: Contato → Identificação → Perfil Financeiro → Seguro → Revisão
- [x] Mensagem: seguro aumenta em 70% a chance de aprovação
- [x] Mensagem: seguro ajuda a manter o projeto de crédito social
- [x] Seguro não é obrigatório (botão "Pular" visível)
- [x] Integrar PIX QR Code e Stripe dentro da etapa de seguro
- [x] Polling de status do pagamento dentro da etapa
- [x] Atualizar navegação e remover página /seguro separada
- [x] Testar fluxo completo

## Integração PIX Real
- [ ] Pesquisar e escolher API PIX (Mercado Pago, PagSeguro, Gerencianet/EfiPay, etc.)
- [ ] Implementar geração de cobrança PIX real via API
- [ ] Gerar QR Code real a partir da API
- [ ] Implementar webhook para confirmação automática de pagamento
- [ ] Atualizar status no banco de dados ao receber confirmação
- [ ] Remover mock-paid do fluxo de produção
- [ ] Configurar secrets da API PIX escolhida
- [ ] Atualizar frontend para exibir QR Code real e payload
- [ ] Testes unitários da integração

## Reverter Mercado Pago + Confirmação Manual Admin
- [x] Remover arquivos mercadopago.ts e mercadopago-webhook.ts
- [x] Reverter server/_core/index.ts (remover import/registro MP webhook)
- [x] Remover botão mock-paid do frontend (Proposta.tsx)
- [x] Adicionar botão "Confirmar Pagamento PIX" no painel admin (drawer de detalhes)
- [x] Manter PIX estático com chave Nubank
- [x] Testes e validação

## Configurações PIX no Admin
- [x] Tabela site_settings no banco (chave-valor)
- [x] Helpers de leitura/escrita de configurações
- [x] Rotas tRPC admin: getSettings, updateSettings
- [x] Atualizar server/pix.ts para ler chave PIX do banco
- [x] UI de configurações no painel admin (aba/seção)
- [x] Campos: chave PIX, tipo da chave, nome beneficiário, cidade beneficiário, valor seguro
- [x] Testes unitários

## Etiqueta Google Ads
- [x] Instalar gtag.js com ID AW-17945796595 no index.html

## Logo e Imagem de Fundo
- [x] Upload do logo EmprestimoSocial.org para S3
- [x] Upload da imagem de fundo (pessoas diversas) para S3
- [x] Atualizar Header com novo logo
- [x] Atualizar Footer com novo logo
- [x] Atualizar Hero da Landing Page com imagem de fundo
- [x] Atualizar favicon com o logo (logo aplicado no Header/Footer)

## Ajustes Visuais
- [x] Aumentar tamanho do logo no Header e Footer
- [x] Aumentar logo ainda mais no Header
- [x] Adicionar barra de credibilidade acima do header (5 estrelas Reclame Aqui, clientes atendidos, selos)

## Correção PIX + Mensagens Segurança
- [x] Atualizar chave PIX para CPF 97943878191 (pessoa física)
- [x] Atualizar nome beneficiário para encarregado de dados
- [x] Adicionar mensagem: pagamento para pessoa física / encarregado de dados
- [x] Adicionar mensagem: é seguro, garantia de estorno se não aprovado

## Seguro Dinâmico (0,89% do valor do empréstimo)
- [x] Atualizar config: trocar valor fixo por percentual (0.89%)
- [x] Backend: calcular valor do seguro com base no valor do empréstimo
- [x] Backend: gerar PIX com valor dinâmico
- [x] Backend: Stripe checkout com valor dinâmico
- [x] Frontend: exibir valor calculado na etapa de seguro
- [x] Atualizar admin: configuração de percentual em vez de valor fixo
- [x] Testes unitários atualizados (52 testes passando)

## Correção PIX Estático
- [x] Upload da imagem QR Code real para S3
- [x] Atualizar generatePix para usar código estático (sem geração dinâmica)
- [x] Remover txid da resposta (não mais necessário)
- [x] Exibir QR Code real na etapa de seguro
- [x] Adicionar aviso em destaque: "Insira o valor correto do seguro"
- [x] Atualizar Proposta.tsx e Seguro.tsx para remover referências a txid
- [x] Atualizar PIX Copia e Cola para código estático
- [x] Testes passando (52 testes)

## Configuração Stripe - Pagamento com Cartão
- [x] Verificar rota createStripeCheckout com valor dinâmico
- [x] Atualizar webhook para usar valor dinâmico na notificação
- [x] Melhorar UX: exibir valor do seguro antes de escolher método
- [x] Melhorar feedback: mensagens de sucesso/cancelamento
- [x] Testes passando (52 testes)
- [x] Servidor rodando sem erros

## Dashboard de Pagamentos - Backend
- [x] Adicionar função getAllInsurancePayments com filtros
- [x] Adicionar função getInsurancePaymentStats para estatísticas
- [x] Adicionar rotas admin.payments e admin.paymentStats
- [x] Testes passando (52 testes)
- [x] Servidor rodando sem erros
