import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_PROJECTS } from '../graphql/query/project';
import Button  from './Button';
import BasicCard from './BasicCard';

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
      <Link to="/createProject"><Button name="Add Project" action={()=>{}} /></Link>
      <div style={{display: "flex"}}>
        { data && data.projects.map((project : IProject) => <BasicCard btn id={project._id} name={project.name} description={project.description} /> ) }
      </div>
    </div>
  )
}
export default Projects;