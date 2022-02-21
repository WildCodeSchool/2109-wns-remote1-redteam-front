/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import {DELETE_PROJECT} from '../graphql/mutation/project';



interface IBasicCardProps {
  id: string,
  name: string,
  description: string,
  btn?: boolean
}

function BasicCard({ id, name, description, btn }: IBasicCardProps): JSX.Element {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted: () => console.log("yes"),
});

  function handleDeleteProject(idProject : string) {
    deleteProject({variables : {deleteProjectId: idProject}})
  };
  
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {btn && <Button onClick={() => handleDeleteProject(id)} size="small">Supprimer</Button>}
          <Button>
            <Link to={`/project/${id}`}>Modifier</Link>
          </Button>
        </CardActions>
      </Card>
  );
}
// permet de valider la règle ESLint
BasicCard.defaultProps = {
  btn: false,
};
export default BasicCard;

