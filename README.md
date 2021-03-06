# Bienvenue sur l'application `2109-wns-remote1-redteam-front` ๐๐ผ


<div style={display:"flex"}>
<img src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />

<img src="	https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
</div>

_________________________________________
## Installation du projet ๐๐ผ

### Cloner le projet 

>https://github.com/WildCodeSchool/2109-wns-remote1-redteam-front.git

### Installer les dรฉpendances 

Toutes les dรฉpendances du projet se trouve dans le fichier package.json 

Lancer la commande : 
``` 
npm install 
```
_________________________________________
## Lancement du projet ๐๐ผ

### Dรฉmarrer ๐ช๐ผ
```
npm start 
```

Le projet est disponible sur le port 
> http://localhost:3000

_________________________________________
## Structure du projet ๐คฏ

### Dossier SRC


````
./src
โโโ components
โ   โโโ Admin
โ   โ   โโโ Signup.tsx
โ   โโโ Card
โ   โ   โโโ BasicCard.tsx
โ   โโโ Dashboard
โ   โ   โโโ Dashboard.tsx
โ   โโโ Navbar
โ   โ   โโโ Navbar.tsx
โ   โโโ Projects
โ   โ   โโโ Projects.tsx
โ   โโโ Tasks
โ   โ   โโโ Tasks.tsx
โ   โโโ Users
โ   โ   โโโ Users.tsx
โ   โโโ BtnComponent.tsx
โ   โโโ IconText.tsx
โ   โโโ TextField.tsx
โโโ graphql
โ   โโโ mutation
โ   โ   โโโ project.ts
โ   โโโ query
โ       โโโ project.ts
โโโ theme
โ   โโโ theme.jsx
โโโ App.css
โโโ App.test.tsx
โโโ App.tsx
โโโ index.css
โโโ index.tsx
โโโ react-app-env.d.ts
โโโ reportWebVitals.ts
โโโ settings.ts
โโโ setupTests.ts
````


_________________________________________
#### Dossier components ๐

Les composants vous permettent de dรฉcouper lโinterface utilisateur en รฉlรฉments indรฉpendants et rรฉutilisables, vous permettant ainsi de considรฉrer chaque รฉlรฉment de maniรจre isolรฉe. 

_________________________________________
#### Dossier graphql ๐

Le dossier graphQl est structurรฉ en 2 parties. 

Le dossier query comporte la dรฉfinition de toutes nos queries vers l'API pour rรฉcupรฉrer les donnรฉes (รฉquivalent du GET en REST)

Le dossier mutations comporte la dรฉfinition de toutes nos mutations  vers l'API pour envoyer de la donnรฉes (รฉquivalent du POST, PUT, DELETE en REST)

_________________________________________
#### Dossier theme ๐

Ce dossier comporte le fichier de theming mis ร? disposition par MaterialUI. Il permet de dรฉfinir des propriรฉtรฉs globales de style rรฉutilisable par tout nos          composants.

_________________________________________
#### Fichiers 

##### App.tsx 
Le composant ยซ App ยป du fichier ยซ App. tsx ยป est notre composant root de base. Il permet d'importer les autres composants pour afficher le rendu.



[Source Badge](https://github.com/alexandresanlim/Badges4-README.md-Profile)
