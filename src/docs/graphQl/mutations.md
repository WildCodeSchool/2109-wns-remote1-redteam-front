# Mutations 

## Mise en place

```typescript
./src > graphQl > mutations > project.ts |
-------------------------------------

import { gql } from '@apollo/client';

const DELETE_PROJECT = gql`
mutation DeleteProject($deleteProjectId: String) {
    deleteProject(_id: $deleteProjectId) {
      name
      description
    }
  }
`;

export default DELETE_PROJECT;

```


## Explications

```typescript
import { gql } from '@apollo/client';
```
>Ici on import gql depuis @apollo/client. Gql nous permet d'écrire les mutations dans la syntaxe graphQl.
_________________

```typescript
const DELETE_PROJECT = gql`
mutation DeleteProject($deleteProjectId: String) {
    deleteProject(_id: $deleteProjectId) {
      name
      description
    }
  }
`;

export default DELETE_PROJECT;
```

>On créer une variable DELETE_PROJECT qui contient la mutation pour supprimer un projet dans notre API. Ensuite, on exporte cette variable pour pouvoir executer la mutation depuis nos composants.

_________________

## Utilisation

### Ici le but est de pouvoir supprimer un `project` depuis notre application via un bouton


```typescript
./src > components > Dashboard > Dashboard.tsx |
-----------------------------------------------
import { useMutation } from '@apollo/client';
import DELETE_PROJECT from '../../graphql/mutation/project';

function BasicCard({ id, name, description, btn }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted: () => console.log("yes"),
});

  function handleDeleteProject(idProject) {
    deleteProject({variables : {deleteProjectId: idProject}})
  };
  
  return (
    <Card>
        <CardContent>
          <Content />
        <CardActions>
          {btn && 
          <Button onClick={() => handleDeleteProject(id)} >
            Supprimer
          </Button>}
        </CardActions>
      </Card>
  );
}

export default BasicCard;
```

_________________
```typescript
./src > components > Card > BasicCard.tsx |
-------------------------------------------
import { useMutation } from '@apollo/client';
import DELETE_PROJECT from '../../graphql/mutation/project';

```
>On commence par importer le hook `useMutation` depuis apolloClient. Celui-ci nous permettra d'excuter les mutations définies plus tôt, importées depuis le dossier des mutations. Le hook nous permet d'executer la mutation.
_________________
```typescript
./src > components > Card > BasicCard.tsx |
-------------------------------------------

const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted: () => console.log("completed"),
    onError : () => console.log("error")
});
```
>Ici nous définissons le nom de la fonction qui sera utiliser pour executer la mutation. Le hook `useMutation` prend en parametre deux arguments. Le premier est la mutation à executer. Le second est un object auquel nous pourront attribuer des fonction selon l'état de la mutation.


_________________
```typescript
./src > components > Card > BasicCard.tsx |
-------------------------------------------

function handleDeleteProject(idProject) {
    deleteProject({variables : {deleteProjectId: idProject}})
  };
```
>Ensuite, nous pouvons utiliser la fonction `deleteProject` dans une fonction `handleDeleteProject` qui prend en paramètre l'ID du project (argument passer en props depuis le composant parent) qui sera appeler via un évenement sur un bouton. `deleteProject` prend en parametre un object qui a pour clé `variables` et pour valeur un object. Cet object à pour clé le nom de la variable défini dans la définition de mutation ([`../../graphQl/mutations/project.ts`](./src/graphQl/mutations/project.ts)), et pour valeur l'id du projet à supprimer.

### Ressources 

- [Apollo Client Mutations](https://www.apollographql.com/docs/react/data/mutations/)


