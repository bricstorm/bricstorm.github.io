# BRICSTORM - Versão GitHub Pages

Esta é uma versão adaptada do projeto BRICSTORM para funcionar no GitHub Pages.

## Principais Adaptações

### 1. Remoção do Backend
- Removido servidor Express.js
- Convertido para aplicação 100% frontend
- Mantidas todas as funcionalidades visuais e interativas

### 2. Configuração para GitHub Pages
- Build otimizado para servir arquivos estáticos
- Configuração de rotas para SPA
- Assets otimizados para carregamento rápido

### 3. Funcionalidades Mantidas
- ✅ Design responsivo completo
- ✅ Animações e efeitos visuais
- ✅ Logo animado do BRICSTORM
- ✅ Seções: Hero, Token Specs, Roadmap, Community
- ✅ Links para PancakeSwap
- ✅ Tema dark com cores BRICS

### 4. Funcionalidades Removidas
- ❌ Autenticação de usuários (backend)
- ❌ Sessões (não aplicável para site estático)
- ❌ API endpoints (convertidos para dados estáticos)

## Deploy no GitHub Pages

### Passo 1: Criar Repositório
1. Criar novo repositório no GitHub
2. Nome sugerido: `bricstorm-website`
3. Fazer upload dos arquivos desta pasta

### Passo 2: Configurar GitHub Pages
1. Ir em Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Save

### Passo 3: Domínio Personalizado (Opcional)
- Configurar domínio personalizado se desejar
- Exemplo: bricstorm.github.io

## Estrutura do Projeto

```
github-pages-version/
├── index.html              # Página principal
├── assets/                 # Imagens e recursos
├── css/                    # Estilos CSS
├── js/                     # JavaScript
├── components/             # Componentes React compilados
└── README.md              # Este arquivo
```

## Vantagens da Versão GitHub Pages

1. **Gratuito**: Hospedagem gratuita no GitHub
2. **Rápido**: Carregamento otimizado
3. **Confiável**: Infraestrutura do GitHub
4. **Fácil**: Deploy automático a cada commit
5. **SEO**: Melhor indexação para sites estáticos