#!/bin/bash
set -e

# Uso: ./deploy.sh ["mensagem de commit"]
COMMIT_MSG="${1:-Página inicial com layout completo BRIC\$TORM}"
REMOTE_URL="git@github.com:bricstorm/bricstorm.github.io.git"
BRANCH="main"

echo "🚀 Iniciando o deploy da BRIC\$TORM..."

# 1. Garantir que estamos na branch correta
echo "🔄 Alternando para a branch $BRANCH..."
git checkout "$BRANCH"

# 2. Remover diretório dist antigo
echo "🧹 Limpando diretório de build anterior..."
rm -rf dist

# 3. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 4. Gerar build (usa os arquivos como estão na sua pasta agora, commitados ou não)
echo "🔧 Gerando build..."
npm run build

# 5. Fazer deploy com gh-pages (publica dist/ na branch gh-pages)
echo "🚀 Fazendo deploy para GitHub Pages..."
npm run deploy

# 6. Garantir que o remote aponta para o repositório correto
echo "🔗 Configurando remote 'origin'..."
git remote set-url origin "$REMOTE_URL" 2>/dev/null || git remote add origin "$REMOTE_URL"

# 7. Adicionar, commitar e enviar o código-fonte para a branch main
echo "📝 Adicionando alterações..."
git add .

if git diff --cached --quiet; then
  echo "✅ Nada novo para commitar no código-fonte."
else
  echo "💾 Commitando: \"$COMMIT_MSG\""
  git commit -m "$COMMIT_MSG"

  echo "☁️  Enviando para origin/$BRANCH (force push)..."
  git push --force origin "$BRANCH"
fi

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Site: https://bricstorm.github.io"
