# Guia Rápido - Como Continuar Alimentando o Site

**Para:** Usuário final que quer editar e evoluir o site  
**Tempo:** 5 minutos para entender

---

## 🎯 O Que Você Tem Agora

✅ Site funcional com 6 páginas  
✅ Estrutura pronta para crescer  
✅ Código versionado no GitHub  
✅ Servidor de desenvolvimento rodando  

---

## 📝 Como Editar Conteúdo

### Editar Texto de uma Página

1. **Abra o arquivo da página** em `client/src/pages/`
   - `Home.tsx` → Homepage
   - `Services.tsx` → Página de serviços
   - `About.tsx` → Sobre
   - `Contact.tsx` → Contato
   - `Privacy.tsx` → Privacidade
   - `Terms.tsx` → Termos

2. **Encontre o texto que quer mudar** (está em português)

3. **Edite direto** - o site atualiza automaticamente

4. **Exemplo:**
   ```tsx
   // Antes
   <h1 className="text-4xl font-bold mb-4">Conformidade LGPD Simplificada</h1>
   
   // Depois
   <h1 className="text-4xl font-bold mb-4">Seu novo título aqui</h1>
   ```

---

## 🎨 Como Adicionar uma Nova Página

1. **Crie um novo arquivo** em `client/src/pages/`
   ```
   client/src/pages/MinhaPagina.tsx
   ```

2. **Copie o template** de outra página (ex: `About.tsx`)

3. **Edite o conteúdo** conforme necessário

4. **Adicione a rota** em `client/src/App.tsx`:
   ```tsx
   import MinhaPagina from "./pages/MinhaPagina";
   
   // Dentro da função Router():
   <Route path={"/minha-pagina"} component={MinhaPagina} />
   ```

5. **Adicione o link** no header ou footer:
   ```tsx
   <Link href="/minha-pagina" className="text-sm hover:text-primary transition">
     Minha Página
   </Link>
   ```

---

## 🔗 Como Adicionar Links

### Link Interno (para outra página do site)
```tsx
<Link href="/servicos">Ir para Serviços</Link>
```

### Link Externo (para outro site)
```tsx
<a href="https://exemplo.com" target="_blank">
  Abrir em nova aba
</a>
```

### Email
```tsx
<a href="mailto:contato@lgpd-dpo.com">Enviar email</a>
```

### Telefone
```tsx
<a href="tel:+5511999999999">Ligar</a>
```

---

## 🎨 Como Mudar Cores e Estilos

### Cores Disponíveis (Tailwind)
```
blue-50, blue-100, ..., blue-900
gray-50, gray-100, ..., gray-900
red-50, red-100, ..., red-900
green-50, green-100, ..., green-900
```

### Exemplos de Classes
```tsx
// Fundo azul
<div className="bg-blue-700">...</div>

// Texto cinza
<div className="text-gray-600">...</div>

// Borda
<div className="border border-gray-300">...</div>

// Padding (espaço interno)
<div className="p-4">...</div>  // 1rem em todos os lados
<div className="px-4 py-2">...</div>  // Horizontal e vertical

// Margin (espaço externo)
<div className="m-4">...</div>  // 1rem em todos os lados
<div className="mb-4">...</div>  // Margem inferior

// Tamanho de fonte
<h1 className="text-4xl">...</h1>  // Grande
<p className="text-lg">...</p>  // Médio
<span className="text-sm">...</span>  // Pequeno
```

---

## 🖼️ Como Adicionar Imagens

### Opção 1: URL Externo (Recomendado)
```tsx
<img src="https://exemplo.com/imagem.png" alt="Descrição" />
```

### Opção 2: Imagem Local (em public/)
```tsx
<img src="/imagem.png" alt="Descrição" />
```

---

## 📱 Responsividade

O site já é responsivo! Usa classes Tailwind:

```tsx
// Diferente em mobile vs desktop
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* 1 coluna em mobile, 3 colunas em desktop */}
</div>

// Texto maior em desktop
<h1 className="text-2xl md:text-4xl">...</h1>

// Padding diferente
<div className="px-4 md:px-8">...</div>
```

---

## 🚀 Como Fazer Deploy

### Opção 1: Usar Manus (Recomendado)
1. Clique em **"Publish"** no painel Manus
2. Pronto! Site ao vivo

### Opção 2: GitHub + Vercel/Netlify
1. Push para GitHub: `git push origin main`
2. Conecte Vercel/Netlify ao repositório
3. Deploy automático a cada push

---

## 💾 Como Salvar Mudanças

### Local
```bash
# Seu computador já salva automaticamente
```

### GitHub
```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

---

## 🐛 Se Algo Quebrar

### Verificar Erros
1. Abra o console do navegador (F12)
2. Procure por mensagens de erro
3. Verifique a sintaxe do código

### Desfazer Mudanças
```bash
git revert HEAD  # Desfaz último commit
git checkout -- arquivo.tsx  # Desfaz arquivo específico
```

---

## 📚 Próximos Passos Sugeridos

1. **Adicionar Imagens**
   - Logo da empresa
   - Fotos da equipe
   - Ícones de serviços

2. **Melhorar Formulário de Contato**
   - Conectar a um backend
   - Enviar emails automaticamente
   - Validação em tempo real

3. **Adicionar Mais Conteúdo**
   - Blog/Artigos
   - Case studies
   - Depoimentos de clientes

4. **SEO**
   - Meta tags
   - Sitemap
   - robots.txt

5. **Analytics**
   - Google Analytics
   - Rastreamento de conversões

---

## 🆘 Precisa de Ajuda?

- **Documentação Completa:** Ver `ARQUITETURA_BASE.md`
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev
- **Wouter (Roteamento):** https://github.com/molefrog/wouter

---

**Última atualização:** 07 de Março de 2026
