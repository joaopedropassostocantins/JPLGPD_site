# Backlog de Sprints — 4 Pilares Consultoria

**Data:** 2026-03-07

---

## Sprint 0 — Auditoria e Saneamento (CONCLUIDA)

- [x] Inventario completo do repositorio
- [x] Auditoria de conflitos conceituais (emprestimo vs. consultoria)
- [x] Matriz de decisao (manter/adaptar/remover/recriar)
- [x] Documentacao: `docs/auditoria-repositorio.md`

## Sprint 1 — Correcao Comercial e Regulatoria (CONCLUIDA)

- [x] Padronizar pricing: R$ 150/mes (12m) + R$ 300/mes (12m) = 24 meses
- [x] Remover claims "DPO certificado"
- [x] Remover claims "registrado na ANPD"
- [x] Corrigir linguagem regulatoria em todas as paginas
- [x] Reescrever FAQ para LGPD
- [x] Documentacao: `docs/revisao-comercial.md`, `docs/revisao-regulatoria.md`

## Sprint 2 — Homepage e Identidade (CONCLUIDA)

- [x] Reescrever Home.tsx (landing de consultoria LGPD)
- [x] Reescrever Header.tsx (marca 4 Pilares)
- [x] Reescrever Footer.tsx (4 Pilares, CNPJ correto)
- [x] Adaptar Transparencia.tsx → pagina de Servicos
- [x] Reescrever Termos.tsx (para consultoria)
- [x] Reescrever Privacidade.tsx (para 4 Pilares)
- [x] Padronizar identidade (marca, CNPJ, e-mail)
- [x] Documentacao: `docs/padronizacao-identidade.md`, `docs/copy-home-corrigida.md`

## Sprint 3 — Pagamentos e Contrato (PARCIAL)

- [x] Validar integracao Mercado Pago → doc: `docs/validacao-mercadopago-producao.md`
- [x] Criar termo-base contratual → doc: `docs/termo-base.md`
- [ ] Reconfigurar products.ts para plano consultoria
- [ ] Implementar cobranca recorrente (assinatura mensal)
- [ ] Validar webhook com assinatura MP
- [ ] Remover botao mock de pagamento
- [ ] Criar checkout funcional para Plano Essencial
- [ ] Testar end-to-end em sandbox

## Sprint 4 — Servicos, Funil e Escala (PENDENTE)

- [ ] Implementar formulario de diagnostico inicial
- [ ] Criar pagina de agradecimento pos-contato
- [ ] Integrar WhatsApp Business API (se aplicavel)
- [ ] Implementar tracking de conversao (UTM → lead)
- [ ] Criar dashboard de leads no admin
- [ ] Adaptar admin para gestao de clientes consultoria
- [ ] SEO: meta tags, sitemap, structured data
- [ ] Performance: lighthouse audit
- [ ] Deploy em dominio definitivo
- [ ] Criar pagina de Cookies
- [ ] Implementar banner de cookies

---

## Proximas Prioridades

1. Definir numero de WhatsApp e telefone reais
2. Definir e registrar dominio
3. Fornecer ou criar logo da marca
4. Revisao juridica do termo-base por advogado
5. Configurar Mercado Pago em producao
6. Deploy MVP
