import React from 'react';
import BasicCard from '../Card/BasicCard';

function Dashboard(): JSX.Element {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Liste des projets</h3>
      <div style={{display: "flex"}}>
        <BasicCard title="Projet 1" description="description du projet" />
        <BasicCard title="Projet 2" description="description du projet" />
        <BasicCard title="Projet 3" description="description du projet" />
      </div>
    </div>
  )
}
export default Dashboard;