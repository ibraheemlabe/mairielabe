#!/bin/bash

# Script de déploiement pour la Commune de Labé sur GitHub Pages
# Ce script gère la détection du nom du dépôt et la compilation avec le bon chemin de base.

# Arrêter le script en cas d'erreur
set -e

echo "========================================================"
echo "  Déploiement du Portail de Labé sur GitHub Pages       "
echo "========================================================"

# 1. Détection ou saisie du nom du dépôt
REPO_NAME=""

if [ -d .git ]; then
    # Essayer de récupérer le nom du dépôt à partir de l'URL distante
    REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
    if [ ! -z "$REMOTE_URL" ]; then
        # Extraire le nom du dépôt à partir de l'URL git
        # ex: https://github.com/user/repo-name.git -> repo-name
        REPO_NAME=$(basename -s .git "$REMOTE_URL")
    fi
fi

if [ -z "$REPO_NAME" ]; then
    echo "Impossible de détecter automatiquement le nom du dépôt GitHub."
    read -p "Veuillez entrer le nom de votre dépôt GitHub (ex: 'commune-labe'): " REPO_NAME
fi

# Nettoyer les espaces ou les slashes éventuels
REPO_NAME=$(echo "$REPO_NAME" | tr -d '[:space:]' | sed 's/^\///' | sed 's/\///')

echo "--> Nom du dépôt sélectionné : $REPO_NAME"
echo "--> Chemin de base configuré : /$REPO_NAME/"

# 2. Nettoyage et installation des dépendances si nécessaire
if [ ! -d node_modules ]; then
    echo "--> Installation des dépendances npm..."
    npm install
fi

# 3. Compilation avec le base path correct
echo "--> Compilation en cours avec VITE_BASE_PATH=/$REPO_NAME/..."
export VITE_BASE_PATH="/$REPO_NAME/"
npm run build

echo "========================================================"
echo "  Compilation réussie !"
echo "========================================================"
echo "Le dossier 'dist/' contient maintenant les fichiers prêts pour GitHub Pages."
echo "Les chemins d'accès aux fichiers statiques (JS, CSS) sont correctement configurés."
echo ""
echo "Pour publier sur GitHub Pages, vous avez deux méthodes :"
echo ""
echo "Méthode A : Utiliser le déploiement automatique par GitHub Actions"
echo "  1. Poussez simplement vos modifications sur la branche principale :"
echo "     git add ."
echo "     git commit -m 'Configure GitHub Pages deploy'"
echo "     git push origin main"
echo "  2. Le workflow GitHub Actions (déjà créé dans .github/workflows/deploy.yml)"
echo "     compilera et déploiera automatiquement l'application pour vous !"
echo ""
echo "Méthode B : Déploiement manuel via une branche 'gh-pages'"
echo "  Si vous préférez pousser directement le dossier compilé :"
echo "  1. Installez l'utilitaire gh-pages : npm install -D gh-pages"
echo "  2. Ajoutez ce script à votre package.json dans 'scripts' :"
echo "     \"predeploy\": \"npm run build\","
echo "     \"deploy\": \"gh-pages -d dist\""
echo "  3. Lancez : npm run deploy"
echo "========================================================"
