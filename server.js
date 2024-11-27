import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Récupère le chemin actuel (__dirname en ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir les fichiers statiques de dist/
app.use(express.static(path.join(__dirname)));

// Gestion des routes React (fallback vers index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Application disponible à l'adresse : http://localhost:${port}`);
});
