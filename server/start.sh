#!/bin/bash

# Lance le serveur
node server.js || { echo "Erreur lors du lancement du serveur"; exit 1; }

# Ouvre l'application dans le navigateur par défaut
xdg-open http://localhost:3000

# Ajout d'une pause (optionnel)
read -p "Appuyez sur une touche pour fermer le terminal..."
