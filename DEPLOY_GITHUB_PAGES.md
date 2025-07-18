# Deploy no GitHub Pages - Guia Completo

## Pré-requisitos
- Conta no GitHub
- Git instalado
- Node.js instalado

## Passo 1: Preparar o Projeto

### 1.1 Fazer Download dos Arquivos
Baixe todos os arquivos da pasta `github-pages-version/` que foram criados.

### 1.2 Instalar Dependências
```bash
npm install
```

### 1.3 Testar Localmente
```bash
npm run dev
```
Acesse http://localhost:3000 para testar

## Passo 2: Criar Repositório no GitHub

### 2.1 Criar Novo Repositório
1. Acesse https://github.com
2. Clique em "New repository"
3. Nome: `bricstorm-website` (ou nome desejado)
4. Marque como "Public"
5. Clique em "Create repository"

### 2.2 Fazer Upload dos Arquivos
```bash
git init
git add .
git commit -m "Initial commit - BRICSTORM website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/bricstorm-website.git
git push -u origin main
```

## Passo 3: Configurar GitHub Pages

### 3.1 Ativar GitHub Pages
1. Vá para Settings do repositório
2. Clique em "Pages" na barra lateral
3. Em "Source", selecione "Deploy from a branch"
4. Escolha "main" branch
5. Pasta: "/ (root)"
6. Clique em "Save"

### 3.2 Configurar Build Automático
Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Passo 4: Verificar Deploy

### 4.1 Aguardar Build
- O GitHub Actions vai fazer o build automaticamente
- Acompanhe em "Actions" do repositório

### 4.2 Acessar Website
- Seu site estará em: `https://SEU_USUARIO.github.io/bricstorm-website/`
- Pode demorar alguns minutos para ficar disponível

## Passo 5: Domínio Personalizado (Opcional)

### 5.1 Configurar Domínio
Se você tiver um domínio próprio:
1. Vá em Settings > Pages
2. Em "Custom domain", digite seu domínio
3. Crie um arquivo `CNAME` na raiz com seu domínio

### 5.2 Configurar DNS
No seu provedor de domínio, configure:
- CNAME: www → SEU_USUARIO.github.io
- A records: @ → IPs do GitHub Pages

## Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
```

### Deploy Manual
```bash
npm run deploy       # Build e deploy via gh-pages
```

## Estrutura Final

```
bricstorm-website/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Vantagens desta Versão

✅ **Gratuito**: Hospedagem gratuita no GitHub
✅ **Rápido**: Carregamento otimizado
✅ **Seguro**: HTTPS automático
✅ **Automático**: Deploy a cada commit
✅ **Profissional**: Domínio personalizado opcional

## Próximos Passos

1. Personalizar cores e conteúdo
2. Adicionar mais funcionalidades
3. Integrar com analytics
4. Adicionar blog/notícias
5. Configurar SEO avançado

---

**Domínio Final**: `https://SEU_USUARIO.github.io/bricstorm-website/`
**Custo**: Gratuito
**Tempo de Deploy**: ~5 minutos