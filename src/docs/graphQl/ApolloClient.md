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






