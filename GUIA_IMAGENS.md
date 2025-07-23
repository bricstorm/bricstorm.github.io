# Guia de Imagens para GitHub Pages - BRICSTORM

## Estrutura de Pastas de Imagens

Para que as imagens funcionem corretamente no GitHub Pages, elas devem estar organizadas assim:

```
github-pages-version/
├── src/
│   └── assets/
│       ├── hero-lion.jpg      (Imagem principal do leão)
│       ├── logo.png           (Logo BRICSTORM)
│       └── banner.png         (Banner/capa Twitter)
└── public/
    └── images/                (Imagens públicas opcionais)
```

## Imagens Já Copiadas

✅ **hero-lion.jpg** - Imagem principal do leão BRICSTORM (usado no HeroSection)
✅ **logo.png** - Logo oficial BRICSTORM 
✅ **banner.png** - Banner/capa do Twitter

## Como Usar as Imagens nos Componentes

### 1. Import no topo do arquivo JSX:
```jsx
import heroImage from '../assets/hero-lion.jpg'
import logo from '../assets/logo.png'
```

### 2. Usar no JSX:
```jsx
<img src={heroImage} alt="BRICSTORM" />
```

## Vite Assets

O Vite (build tool) vai:
1. Processar as imagens da pasta `src/assets/`
2. Otimizar automaticamente as imagens
3. Gerar nomes únicos com hash para cache
4. Colocar na pasta `dist/assets/` após build

## Para Build de Produção

Quando executar `npm run build`:
- As imagens serão otimizadas e copiadas para `dist/assets/`
- Os imports serão atualizados automaticamente
- Tudo funcionará corretamente no GitHub Pages

## Resultado Esperado

Com essas imagens configuradas, o GitHub Pages terá:
- Imagem do leão aparecendo corretamente no hero
- Logo disponível para uso na navegação
- Layout idêntico ao Replit