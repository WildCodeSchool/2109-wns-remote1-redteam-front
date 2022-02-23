import React, { useState } from 'react';
import Upload from '../components/Upload';


const CreateProject = (): JSX.Element => {
    const [project, setProject] = useState({
        image: "https://www.ecolomag.fr/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg",
        name: "",
        description: ""
    });
    // TODO = type event
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0] 
        if(!file) return; 
        const objectUrl = URL.createObjectURL(file);
        setProject({ ...project, image: objectUrl});
    }
        
    return (
        <>
            <Upload image={project.image} onChange={onChange} />
        </>
    );
}

export default CreateProject;