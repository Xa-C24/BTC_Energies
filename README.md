# Vue 3 + Vite

## Introduction

Bienvenue dans le projet de refonte du site web de **BTC Énergies** ! Ce projet a pour objectif de moderniser et d'optimiser l'interface utilisateur, ainsi que d'améliorer les performances et les fonctionnalités du site existant.

### Objectifs principaux de la refonte :
- **Modernisation du design** : Intégration d'un design plus dynamique et interactif tout en conservant une interface claire et professionnelle.
- **Amélioration des performances** : Optimisation du temps de chargement, utilisation de technologies modernes pour rendre le site plus rapide et fluide.
- **Meilleure expérience utilisateur** : Simplification de la navigation, amélioration de la structure des pages et des fonctionnalités interactives.
- **Réactivité mobile** : Assurer une expérience utilisateur optimale sur tous les appareils, y compris les smartphones et tablettes.
- **Version multilingues** : Proposer aux utilisateurs le choix de la langue ( Anglais, autre ? ).

### Technologies utilisées :
- **Backend** : Django (Python) pour gérer la logique serveur et les bases de données.
- **Frontend** : Vue.js pour une interface utilisateur dynamique et réactive.
- **Design** : Tailwind CSS pour des composants personnalisés et une mise en page flexible.
- **APIs** : Intégration avec des services externes pour des fonctionnalités comme les cartes interactives et les outils de cartographie.

npm run dev

npm run build

netlify deploy --prod   [#05ff16] nouveau       ancien [#22B17A]

npm run build && npm run preview

git remote -v

Miroir

git clone --mirror https://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@github.com/Xa-C24/BTC_Energies.git
cd BTC_Energies.git
git push --mirror https://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@github.com/Xa-C24/BTC_Energies-Backup.git


git remote add backup https://github.com/Xa-C24/BTC_Energies-Backup.git
git push --mirror backup



cd ~/BTC_Energies.git
git fetch -p origin
git push --mirror https://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@github.com/Xa-C24/BTC_Energies-Backup.git

git push --mirror https://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@github.com/Xa-C24/BTC_Energies-Backup.git 
