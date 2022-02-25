# Mutation UpdateProject

## Mise en place

```typescript
./src > views > UpdateProject.tsx
-------------------------------------
import React, { useEffect, useState } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import Upload from "../components/Upload";
import Button from "../components/Button";
import TextField from "../components/inputs/TextField";
import TextFieldIcon from "../components/inputs/TextFieldIcon";
import AvatarList from "../components/AvatarList";
import { GET_PROJECT, GET_PROJECTS } from "../graphql/query/project";
import { UPDATE_PROJECT } from "../graphql/mutation/project";
import useNotification from "../hooks/useNotification";

interface UrlParams {
  id: string;
}

interface IProject {
  _id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  image?: string | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
  advance_pourcentage?: number | undefined;
  members?: string | undefined;
}

const UpdateProject = () => {
  const { id } = useParams<UrlParams>();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  const history = useHistory();
  const [project, setProject] = useState<IProject>();
  const { setNotification } = useNotification();

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    onCompleted: () => {
      history.push(`/projects`);
      setNotification({
        message: "Projet mis à jour",
        type: "success",
        open: true,
      });
    },
    onError: (updateError) => {
      history.goBack();
      setNotification({
        message: updateError.message,
        type: "error",
        open: true,
      });
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  useEffect(() => {
    if (data) {
      setProject(data.project);
    }
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setProject({
        ...project,
        image: objectURL,
      });
    } else {
      setProject({
        ...project,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (!project) {
      return;
    }
    updateProject({ variables: project });
  };

  if (error) return <p>Error</p>;
  if (loading || !project) return <p>Loading...</p>;

  return (
    <div>
      <h2>Update Project</h2>
      <Upload image={data.project.image} onChange={onChange} />
      <TextField
        name="name"
        value={data.project.name}
        label="Project Name"
        type="text"
        onChange={onChange}
      />
      <TextField
        name="description"
        value={data.project.description}
        label="Project Description"
        type="text"
        multiline
        onChange={onChange}
      />
      <TextField
        name="startDate"
        value={data.project.start_date}
        type="date"
        label="Start Date Project"
        onChange={onChange}
      />
      <TextField
        name="endDate"
        value={data.project.end_date}
        type="date"
        label="End Date Project"
        onChange={onChange}
      />
      <TextFieldIcon
        name="time"
        value={data.project.advance_pourcentage}
        label="Add time"
        type="number"
        icon={<AccessAlarmIcon />}
        onChange={onChange}
      />
      <TextFieldIcon
        name="members"
        value={data.project.members}
        label="Add member"
        type="search"
        icon={<PersonSearchIcon />}
        onChange={onChange}
      />
      <AvatarList />
      <Button action={handleSubmit} name="Submit" />
    </div>
  );
};

export default UpdateProject;
```


## Explications

```typescript
import { useHistory, useParams } from "react-router-dom";
```
>Ici on importe les hooks `useHistory` et `useParams` depuis le router de react. 
>Le hook `useHistory` permet d'accéder à l'historique de navigation. 
_________________

```typescript
interface UrlParams {
  id: string;
}

const { id } = useParams<UrlParams>();
```
>Ici, on récupère un objet `id` en utilisant le hook `useParams` qui permet de récupérer les paramètres dans l'url qu'on type avec notre interface `<UrlParams>`.
_________________

```typescript
interface IProject {
  _id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  image?: string | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
  advance_pourcentage?: number | undefined;
  members?: string | undefined;
}

const [project, setProject] = useState<IProject>();

```
>Cette interface permet de typer notre state `project`. Notre state est un objet qui peut avoir des clés qui peuvent être undefined ou non.
_________________


```typescript
 const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  useEffect(() => {
    if (data) {
      setProject(data.project);
    }
  }, [data]);
```
>Le hook `useEffect` permet d'exécuter du code dès que notre composant se monte. Ici, on exécute la fonction `setProject` dès que la query `GET_PROJECT` aura été bien exécutée.
_________________


## Utilisation

### Ici le but est de pouvoir modifier un `project`

#### Récupération des modifications


```typescript
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setProject({
        ...project,
        image: objectURL,
      });
    } else {
      setProject({
        ...project,
        [e.target.name]: e.target.value,
      });
    }
  };
```

>La fonction `onChange()` nous permet, à chaque changement de valeur dans un champ de formulaire, de savoir dans un premier temps s'il s'agit d'un fichier ou d'un champ texte et va ensuite modifier notre state `project` avec les valeurs qui ont été définies dans ces champs.
>ATTENTION CHANGEMENT A VENIR -> EXPLICATION A DETAILLER
_________________
```typescript
 const handleSubmit = () => {
    if (!project) {
      return;
    }
    updateProject({ variables: project });
  };
```
>Ici, la fonction `handleSubmit` sera déclenchée à la soumission du formulaire et exécutera la mutation `UPDATE_PROJECT`.
_________________


