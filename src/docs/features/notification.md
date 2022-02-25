
## Mise en place

```typescript
./src > NotificationContext.tsx |
-------------------------------------

import React, { useState, createContext }from 'react';
import {AlertColor} from '@mui/material/Alert'


interface NotificationContextInterface {
  open: boolean;
  message: string;
  type: AlertColor
}

export const defaultNotification: NotificationContextInterface = {
  open: false,
  message: '',
  type: 'success'
};

export const NotificationContext = createContext({
    notification : defaultNotification, 
    setNotification : (_: unknown) => {}
});

export const NotificationProvider = ({children} : any) => {
    const [contextNotification, setContextNotification] = useState(defaultNotification);

    const contextValue = { notification: contextNotification, setNotification: (value: any) => setContextNotification(value)};
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
```


## Explications

```typescript
export const NotificationContext = createContext({
    notification : defaultNotification, 
    setNotification : (_: unknown) => {}
});
```
>Ici on crée un contexte nommé `NotificationContext`. Le contexte est un objet ayant pour 2 clés. La première, `notification`, correspond aux données de notre contexte et la seconde, `setNotification`, correspond à une fonction permettant de mettre à jour les données.
_________________


```typescript
export const NotificationProvider = ({children} : any) => {
    const [contextNotification, setContextNotification] = useState(defaultNotification);

    const contextValue = { notification: contextNotification, setNotification: (value: any) => setContextNotification(value)};
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
```
>Nous créons ici un `Provider`. Son but est de transmettre les données et la fonction permettant de mettre à jour les données à tous ses enfants. Ce `Provider` prend en paramètre une props `children` dans laquelle seront contenus tous les enfants de notre balise `<NotificationProvider>`.
>Ici, pour que la valeur de notre `context` soit disponible depuis les enfants, nous créons un `state` que nous passerons en paramètre de notre `NotificationContextProvider`.

_________________

## Utilisation du contexte


```typescript
./src > App.tsx
-------------------------------------

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NotificationProvider>
        <Nos composants>
      </NotificationProvider>
    </ApolloProvider>
  )};
```

>Ici, on englobe tout le contenu de notre application avec `<NotificationProvider>` pour que tous les composants bénéficient des données de notre contexte.


## Explication du hook useNotification


```typescript
./src > hooks > useNotification.ts
-------------------------------------
import { useContext } from 'react';
import { NotificationContext } from '../NotificationContext';

const useNotification = () => {
  const { notification, setNotification } = useContext(NotificationContext);

  return {
    notification,
    setNotification,
  };
}

export default useNotification;
```

>Ici, on importe le hook `useContext` depuis react et le `Context` qu'on a préalablement créé. Ensuite, on écrit une fonction nommée `useNotification` qui récupère depuis notre contexte `NotificationContext` 2 variables que l'on exporte. 
>`notification` nous donne accès aux données et `setNotification` nous permet de modifier les données.


## Utilisation du hook useNotification

```typescript
import useNotification from "../hooks/useNotification"

const { notification, setNotification } = useNotification();

setNotification({
        message: "Projet mis à jour",
        type: "success",
        open: true,
      });
```

>Pour utiliser ce hook `useNotification`, nous devons tout d'abord l'importer. Nous pouvons ensuite récupérer nos données et la fonction permettant de mettre à jour nos données.
>Pour mettre à jour nos données `notification`, nous utilisons la fonction `setNotification` qui prend en paramètre un objet qui décrit une notification.



