# Queries 

## Mise en place

```typescript
./src > graphQl > query > project.ts |
-------------------------------------

import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            _id
            name
            description
            status
        }
    }
`;

export default GET_PROJECTS;

```


## Explications

```typescript
import { gql } from '@apollo/client';
```
>Ici on import gql depuis @apollo/client. Gql nous permet d'écrire les queries dans la syntaxe graphQl.
_________________

```typescript
const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            _id
            name
            description
            status
        }
    }
`;

export default GET_PROJECTS;
```

>On créer une variable GET_PROJECTS qui contient la query pour récupérer l'ensemble des projets depuis notre API. Ensuite, on exporte cette variable pour pouvoir executer la query depuis nos composants.

_________________

## Utilisation

### Ici le but est de récuperer la liste des `projects` depuis l'API pour les afficher


```typescript
./src > components > Dashboard > Dashboard.tsx |
-----------------------------------------------
import { useQuery } from '@apollo/client';
import GET_PROJECTS from '../../graphql/query/project';

function Dashboard(): JSX.Element {

  const { loading, error, data } = useQuery(GET_PROJECTS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>



  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Liste des projets</h3>
      <div style={{display: "flex"}}>
        { data && data.projects.map((project : IProject) => <BasicCard btn id={project._id} name={project.name} description={project.description} /> ) }
      </div>
    </div>
  )
}
export default Dashboard;
```

_________________
```typescript
./src > components > Dashboard > Dashboard.tsx |
-----------------------------------------------
import { useQuery } from '@apollo/client';
import GET_PROJECTS from '../../graphql/query/project';

```
>On commence par importer le hook `useQuery` depuis apolloClient. Celui-ci nous permettra d'excuter les queries définies plus tôt, importées depuis le dossier des queries.
_________________
```typescript
./src > components > Dashboard > Dashboard.tsx |
-----------------------------------------------

const { loading, error, data } = useQuery(GET_PROJECTS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>
```
>Ici on récupere `loading`, `error` & `data` depuis useQuery. On passe en paramètre de `useQuery()` la query à executer `GET_PROJECTS`.
Ces variables nous permettent de gérer les états de la requête. 
Si la requête est entrain de charger, alors on affichera un texte de chargement. Nous traiterons de la même façon les erreurs lors de l'execution de la requête. Lorsque le chargement est false et qu'il n'y a pas de error, la requête est terminée. Nous pourrons donc traiter nos données dans le composant en question. 


### Ressources 

- [Apollo Client Queries](https://www.apollographql.com/docs/react/data/queries/)


