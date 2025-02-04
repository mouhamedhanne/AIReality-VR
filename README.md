# AIReality-VR

**AIReality-VR** est une application immersive qui combine la **réalité virtuelle (VR)** et l'**intelligence artificielle (IA)** pour offrir une expérience unique d'apprentissage de l'anglais. Avec des personnages interactifs, des environnements 3D réalistes et des conversations pilotées par l'IA, AIReality-VR transforme l'apprentissage des langues en une aventure captivante.

---

## 🚀 Fonctionnalités

- **Environnements immersifs** : Explorez des salles de classe virtuelles, des parcs, des cafés et bien plus encore.
- **Personnages interactifs** : Interagissez avec des avatars animés qui répondent à vos questions et vous guident dans votre apprentissage.
- **Conversations pilotées par l'IA** : Pratiquez l'anglais avec une IA conversationnelle avancée, capable de s'adapter à votre niveau.
- **Animations fluides** : Des animations réalistes pour les personnages (salutations, gestes, etc.) rendent l'expérience plus vivante.
- **Interface intuitive** : Une interface utilisateur simple et conviviale pour une prise en main rapide.

---

## 📸 Captures d'écran

![Environnement de salle de classe](/classroom-vr.png)  
_Explorez une salle de classe virtuelle interactive._

![Conversation avec l'IA](/vr-2.png)  
_Pratiquez l'anglais avec un personnage piloté par l'IA._

---

## 🛠️ Technologies utilisées

- **React** : Pour la construction de l'interface utilisateur.
- **React Three Fiber** : Pour la gestion des éléments 3D dans React.
- **Three.js** : Pour le rendu 3D dans le navigateur.
- **OpenAI GPT** : Pour les conversations pilotées par l'IA.
- **Vite** : Pour un développement rapide et moderne.
- **TypeScript** : Pour un code robuste et maintenable.

---

## 🚀 Installation

Suivez ces étapes pour installer et exécuter AIReality-VR en local :

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/mouhamedhanne/AIReality-VR.git
   cd AIReality-VR
   ```

2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Exécuter l'application** :

   ```bash
   npm run dev
   ```

4. **Accéder à l'application** :
   Ouvrez votre navigateur et accédez à `http://localhost:5173`.

---

## 📂 Structure du projet

AIReality-VR/
├── public/ # Fichiers statiques (modèles 3D, etc.)
│ └── models/ # Modèles 3D (GLTF/GLB)
├── src/ # Code source de l'application
│ ├── components/ # Composants React
│ │ ├── Avatar.tsx # Composant pour l'avatar interactif
│ │ ├── Scene.tsx # Composant pour la scène 3D
│ │ └── Model.tsx # Composant pour les modèles 3D
│ ├── App.tsx # Point d'entrée de l'application
│ └── main.tsx # Fichier de rendu principal
├── package.json # Dépendances et scripts
├── vite.config.ts # Configuration de Vite
└── README.md # Documentation du projet

---

## 🤝 Contribution

Nous encourageons les contributions de la communauté. Si vous souhaitez contribuer à AIReality-VR, veuillez suivre les étapes ci-dessous :

1. **Fork le dépôt** :

   ```bash
   git clone https://github.com/mouhamedhanne/AIReality-VR.git
   cd AIReality-VR
   ```

2. **Créer une branche** :

   ```bash
   git checkout -b nouvelle-fonctionnalité
   ```

3. **Faire vos modifications** :
   Modifiez le code source selon vos besoins.

4. **Faire un commit** :

   ```bash
   git commit -m "Description de la modification"
   ```

5. **Faire un push** :

   ```bash
   git push origin nouvelle-fonctionnalité
   ```

6. **Créer une pull request** :
   Allez sur GitHub et créez une pull request.

---

## 📝 Licence

Ce projet est sous licence MIT

---

## 📞 Contact

Pour toute question ou suggestion, veuillez contacter [mouhamedhanne72@gmail.com](mailto:mouhamedhanne72@gmail.com).
