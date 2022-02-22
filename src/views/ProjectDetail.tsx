import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';
import { useParams , useHistory} from 'react-router-dom';
import SnackBar from '../components/SnackBar';
import { GET_PROJECT, GET_PROJECTS } from '../graphql/query/project';
import { DELETE_PROJECT } from '../graphql/mutation/project';
import TextFields from '../components/TextFields';
import useNotification from '../hooks/useNotification';


interface UrlParams {
  id : string;
}

const ProjectDetail = () : JSX.Element => {

  const history = useHistory();
  const { setNotification } = useNotification();
  const  { id } =  useParams<UrlParams>();
  const { loading, error, data } = useQuery(GET_PROJECT, {variables: id});
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted: () => {
      history.goBack()
      setNotification({
        open: true,
        message: 'Project deleted',
        type: 'success'
      });
    },
      refetchQueries: [
        { query: GET_PROJECTS }
      ]
});




  function handleDeleteProject(idProject : string) {
    deleteProject({variables : {deleteProjectId: idProject}})
  };

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error</p>;

  return (
    <div>
      <h1>{data.project.name}</h1>
      <TextFields name="Title" type="text"/>
      <small>description : {data.project.description}</small>
      <TextFields name="description" type="text"/>
      <p>Satut: {data.project.status}</p>
      <TextFields name="status" type="select"/>
      <p>startDate: {data.project.start_date}</p>
      <TextFields name="startProject" type="date"/>
      <p>endDate: {data.project.end_date}</p>
      <TextFields name="endProject" type="date"/>
      <p>Pourcentage: {data.project.advance_pourcentage}</p>
      <TextFields name="pourcentage" type="number" />
      <Button onClick={() => handleDeleteProject(id)} size="small">Supprimer</Button>

    </div>
  )
}

export default ProjectDetail;

