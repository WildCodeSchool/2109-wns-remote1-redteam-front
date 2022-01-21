# ApolloClient 

## Installation 

````
npm install -S @apollo/client
````

## Mise en place

```typescript
./src > App.tsx |
----------------

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App(): JSX.Element {

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )

}

export default App;

```


## Explications

```typescript
const client = new ApolloClient({
  lien,
  cache
});
```
>Ce sera la fonction qui encapsulera notre application et, par conséquent, s'interface avec HTTP, met en cache les données et met à jour le UI.
_________________

```typescript
uri: 'http://localhost:4000/graphql',
```

>Correspond à l'URI de notre API

_________________
```typescript
cache: new InMemoryCache()
```
>Ceci est le magasin de données normalisé d'Apollo Client qui aide à manipuler le cache dans notre application.
_________________
```typescript
return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
```
>Nous avons encapsulé le composant App dans ApolloProvider et avons passé le client comme accessoire au client. 

>ApolloProvider est similaire au Context.Provider de React. 

>Il encapsule votre application React et place le client en contexte, ce qui vous permet d'y accéder de n'importe où dans votre arborescence de composants.


