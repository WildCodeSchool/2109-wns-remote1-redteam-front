import React from 'react';
import ProjectsList from '../components/ProjectsList'


const ProjectsView = ():JSX.Element => {
    console.log("toto")
    return (
        <>
        <h1>Liste des projets</h1>
        <ProjectsList />
        </>
    );
}

export default ProjectsView;