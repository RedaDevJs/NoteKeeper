# NoteKeeper

NoteKeeper est une application permettant de gérer des notes. Elle offre des fonctionnalités de création, lecture, mise à jour et suppression de notes.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js et MongoDB sur votre système.

## Installation

1. Clonez le repository GitHub :

git clone https://github.com/votre-utilisateur/NoteKeeper.git

2. Accédez au répertoire du projet :

cd NoteKeeper



3. Installez les dépendances nécessaires :

npm install



4. Configurez les variables d'environnement en créant un fichier `.env` à la racine du projet et en y spécifiant les valeurs nécessaires :

PORT=6001
MONGODB_URI=<votre_url_mongodb>



## Utilisation

1. Démarrez le serveur :

npm start

rust


2. Accédez à l'application dans votre navigateur à l'adresse suivante :

http://localhost:6001




3. Vous pouvez désormais créer, lire, mettre à jour et supprimer des notes via l'interface utilisateur ou en utilisant les endpoints API.

## Endpoints API

- `GET /api/getnote` : Récupère toutes les notes.
- `POST /api/postnote` : Crée une nouvelle note.
- `PUT /api/updatenote/:id` : Met à jour une note existante.
- `DELETE /api/deletenote/:id` : Supprime une note existante.

## Tests

Pour exécuter les tests, utilisez la commande suivante :

npm test


## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue pour signaler des bogues ou proposer des améliorations.

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).
