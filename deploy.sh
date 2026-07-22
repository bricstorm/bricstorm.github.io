#!/bin/bash

echo "🚀 Iniciando o deploy da BRIC\$TORM..."

# 1. Salvar alterações locais, se houver
echo "💾 Salvando alterações temporariamente (stash)..."
git stash save "🛠️ WIP antes do deploy"

# 2. Garantir que estamos na branch correta
echo "🔄 Alternando para a branch main..."
git checkout main

# 3. Remover diretório dist antigo
echo "🧹 Limpando diretório de build anterior..."
rm -rf dist

# 4. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 5. Gerar build
echo "🔧 Gerando build..."
npm run build

# 6. Fazer deploy com gh-pages
echo "🚀 Fazendo deploy para GitHub Pages..."
npm run deploy

# 7. Restaurar stash, se houver
echo "🔄 Restaurando alterações locais..."
git stash pop || echo "✅ Sem alterações para restaurar."

echo "✅ Deploy concluído com sucesso!"
