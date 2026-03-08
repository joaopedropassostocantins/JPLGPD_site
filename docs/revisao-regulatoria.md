# Revisão Regulatória — 4 Pilares Consultoria

**Data:** 2026-03-07

---

## Claims Regulatórios Problemáticos e Correções

### 1. "DPO Certificado"
- **Arquivos afetados:**
  - `02-site-html/site_origem/index.html` (title, hero, pilar 3, diferenciais, FAQ)
  - `06-checkout-e-pagamento/files_origem/4pilares-lgpd-v2.html` (mesmas posições)
  - `06-checkout-e-pagamento/files_origem/checkout.html` (descrição do plano)
  - `01-visao-geral/JP.LGPD.txt` (múltiplas menções)
- **Problema:** Não existe certificação oficial de DPO no Brasil. A ANPD não emite certificação de DPO.
- **Solução adotada:** Substituído por "DPO / Encarregado terceirizado" ou "profissional com formação e experiência em proteção de dados"
- **Status:** Corrigido nos arquivos HTML ativos nesta sprint

### 2. "Registrado na ANPD"
- **Arquivos afetados:**
  - `02-site-html/site_origem/index.html` (pilar 3, FAQ)
  - `06-checkout-e-pagamento/files_origem/4pilares-lgpd-v2.html` (mesmas posições)
  - `03-painel/4pilares-painel.html` (múltiplas menções)
- **Problema:** A ANPD não mantém registro público obrigatório de DPOs. A comunicação da identidade do DPO é feita pelo controlador, não existe "registro" como certificação.
- **Solução adotada:** Substituído por "comunicação da identidade do encarregado conforme Art. 41 da LGPD" ou "designação formal do encarregado"
- **Status:** Corrigido nos arquivos ativos nesta sprint

### 3. "DPO certificado registrado ANPD"
- **Arquivos afetados:** index.html (linhas 1177, 1179, 1349), 4pilares-lgpd-v2.html
- **Problema:** Combina dois claims problemáticos
- **Solução adotada:** Substituído por "Encarregado (DPO) designado formalmente conforme Art. 41 da LGPD"
- **Status:** Corrigido nesta sprint

### 4. Obrigatoriedade universal do encarregado
- **Arquivos afetados:** Textos implícitos em diversas páginas
- **Problema:** Nem toda empresa é obrigada a designar DPO. A Resolução CD/ANPD nº 2/2022 flexibiliza para agentes de pequeno porte.
- **Solução adotada:** Linguagem qualificada: "conforme aplicável", "quando exigido pela legislação", "avaliação caso a caso"
- **Status:** Corrigido nesta sprint

### 5. Conformidade total garantida
- **Arquivos afetados:** Textos implícitos
- **Problema:** Ninguém pode garantir conformidade total; é um processo contínuo
- **Solução adotada:** "Implementação progressiva de boas práticas", "apoio à adequação", "estruturação de governança"
- **Status:** Corrigido nesta sprint

---

## Linguagem Segura Adotada

| Claim Antigo | Versão Segura |
|-------------|---------------|
| DPO certificado | DPO / Encarregado terceirizado com formação em proteção de dados |
| Registrado na ANPD | Designação formal do encarregado conforme Art. 41 da LGPD |
| Certificação DPO | Formação e experiência em privacidade e proteção de dados |
| Conformidade garantida | Apoio à adequação e implementação progressiva |
| Registro ANPD obrigatório | Comunicação da identidade do encarregado (quando aplicável) |
| Obrigatoriedade universal | Avaliação conforme porte e natureza do tratamento |

---

## Observação

Todos os textos legais e regulatórios devem ser revisados por advogado especializado antes de publicação em produção. As correções aqui aplicadas buscam eliminar claims arriscados, mas não substituem parecer jurídico.
