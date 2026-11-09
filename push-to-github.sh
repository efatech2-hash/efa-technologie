#!/bin/bash
# Script de push vers GitHub - EFA TECHNOLOGIE
echo "=============================================="
echo "Push vers https://github.com/efatech2-hash/efa-technologie.git"
echo "=============================================="

# Si vous disposez d'un GitHub Personal Access Token (PAT) :
read -p "Collez votre GitHub Token (PAT) [Appuyez sur Entrée si déjà configuré via SSH ou gh] : " TOKEN

if [ -n "$TOKEN" ]; then
  git remote set-url origin https://efatech2-hash:${TOKEN}@github.com/efatech2-hash/efa-technologie.git
  echo "URL distante configurée avec authentification."
fi

echo "Envoi en cours sur la branche main..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo "✅ Push réussi avec succès sur https://github.com/efatech2-hash/efa-technologie"
else
  echo "⚠️ Le push nécessite que le dépôt soit créé sur https://github.com/new avec le nom 'efa-technologie'."
fi
