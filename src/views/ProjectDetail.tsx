import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PROJECT } from '../graphql/query/project';
import TextFields from '../components/TextFields';


const ProjectDetail = () : JSX.Element => {

  const id =  useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, {variables: id});

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
    </div>
  )
}

export default ProjectDetail;

