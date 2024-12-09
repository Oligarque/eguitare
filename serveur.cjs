const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Fonction pour récupérer les fichiers embarqués dans l'exécutable
const getAssetPath = (asset) => {
	if (process.pkg) {
    	// Lorsque le code est embarqué dans l'exécutable
    	return path.join(process.cwd(), 'dist', asset);
	}
	// Lorsque le code est exécuté en mode développement (hors exécutable)
	return path.join(__dirname, 'dist', asset);
};

// Servir les fichiers statiques (CSS, JS, images, etc.)
app.use(express.static(getAssetPath('')));

// Rediriger toutes les requêtes vers index.html
app.get('*', (req, res) => {
	res.sendFile(getAssetPath('index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
