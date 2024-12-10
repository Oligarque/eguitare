# Application d'Apprentissage de la Guitare

## e-guitare reboot

Cette application interactive aide à apprendre la guitare à travers des vidéos interactivers.  
Elle utilise **React** et **React-Player** pour une interface fluide et intuitive.

## 🚀 Fonctionnalités
- 📹 Lecture facile des vidéos pédagogiques via React-Player.
- 🎼 Consultation des informations sur chaque morceau : titre, auteur, niveau de difficulté, etc.
- 🔍 Navigation simple et intuitive grâce à une interface web réactive.

## 🛠️ Technologies utilisées
- [React](https://reactjs.org/) pour l'interface utilisateur.
- [React-Player](https://www.npmjs.com/package/react-player) pour l’intégration des vidéos.
- Fichier songData.jsx contenant les informations sur les morceaux.
- [Bootstrap](https://getbootstrap.com/) pour l'interface utilisateur.

## ⚙️ Installation et utilisation

### 1. En mode dev
-Node.js et npm installés sur votre machine.
-Clonez ce dépôt :
```bash
git clone https://github.com/oligarque/eguitare.git
cd eguitare
npm install
npm run dev
```

### 2. Version simple
Cette version comporte un packaging. Pour le lancer en local sans prérequis, téléchargez le dossier, puis lancez la commande :
```bash
git clone https://github.com/oligarque/eguitare.git
cd eguitare
npm install
npm run build
pkg .
```

Cela crée un fichier exe qui va lancer un serveur en local.
