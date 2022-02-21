import React from 'react';
import { useQuery } from '@apollo/client';
import BasicCard from './BasicCard';
import { GET_PROJECTS } from '../graphql/query/project';

interface IProject {
  _id: string,
  name: string,
  description: string, 
  status: string
}
function Projects(): JSX.Element {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error</p>

  return (
    <div>
      <div style={{display: "flex"}}>
        { data && data.projects.map((project : IProject) => <BasicCard btn id={project._id} name={project.name} description={project.description} /> ) }
      </div>
    </div>
  )
}
export default Projects;