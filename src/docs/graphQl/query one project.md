# Query one project

## Mise en place

```typescript
./src > graphQl > query > project.ts |
-------------------------------------

import { gql } from '@apollo/client';

const GET_PROJECT = gql`
    query GetOneProject($id: ID) {
        project(_id: $id) {
            _id
            name
            description
            status
            start_date
            end_date
            advance_pourcentage
        }
    }
`;
export default GET_PROJECT;

```


## Explications


>La query est identique à GET_PROJECTS sauf que l'on a besoin de l'id du projet pour pouvoir récupérer les données d'un projet.

_________________

## Utilisation

### Ici le but est de récuperer les détails d'un `project` depuis l'API afin de les afficher dans la page `ProjectDetails`.


```typescript
./src > components > Dashboard > Dashboard.tsx |
-----------------------------------------------
import React from "react";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT} from "../graphql/query/project";

interface UrlParams {
  id: string;
}

const ProjectDetail = (): JSX.Element => {
  const { id } = useParams<UrlParams>();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>{data.project.name}</h1>
      <small>description : {data.project.description}</small>
      <p>Satut: {data.project.status}</p>
      <p>startDate: {data.project.start_date}</p>
      <p>endDate: {data.project.end_date}</p>
      <p>Pourcentage: {data.project.advance_pourcentage}</p>
    </div>
  );
};

export default ProjectDetail;
```

_________________
```typescript
./src > views > ProjectDetail.tsx |
-----------------------------------------------
import { useQuery } from "@apollo/client";
import GET_PROJECT from '../../graphql/query/project';
import { useParams } from "react-router-dom";

```
>On importe le hook `useQuery` que l'on connait déjà depuis apolloClient. Celui-ci nous permettra d'excuter la query définie plus tôt, importée depuis le dossier des queries.
>On importe également le hook `useParams` depuis le router de react afin de pouvoir récupérer l'id du projet depuis l'url.
 
_________________
```typescript
./src > views > ProjectDetail.tsx |
-----------------------------------------------
interface UrlParams {
  id: string;
}
```
>On crée une interface UrlParams afin de typer l'id qu'on reçoit des paramètres d'url (particularité TypeScript).
  
_________________
```typescript
const { id } = useParams<UrlParams>();
```
>On crée une variable `{ id }` depuis le hook useParams pour pouvoir l'utiliser. `<UrlParams>` correspond au typage TS pour la variable.
  
_________________
```typescript
const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
```
>Ici on récupere `loading`, `error` & `data` depuis useQuery. On passe en paramètre de `useQuery()` la query à executer `GET_PROJECT` à laquelle on passe la variable `{ id }`.
 
_________________
```typescript
 <h1>{data.project.name}</h1>
```
>Ici, on récupère l'objet `data` (réponse de la query), l'objet `project` qui a une clé `name`.
### Ressources 

- [Apollo Client Queries](https://www.apollographql.com/docs/react/data/queries/)




