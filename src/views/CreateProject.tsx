import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import TextField from "../components/inputs/TextField";
import TextFieldIcon from "../components/inputs/TextFieldIcon";
import Upload from "../components/Upload";
import AvatarList from "../components/AvatarList";
import Button from "../components/Button";
import { CREATE_PROJECT } from "../graphql/mutation/project";
import { GET_PROJECTS } from "../graphql/query/project";
import useNotification from "../hooks/useNotification";

const CreateProject = (): JSX.Element => {

  const [project, setProject] = useState({
    image:
      "https://www.ecolomag.fr/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg",
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    time: "",
    members: [],
  });
  const history = useHistory();
  const { setNotification } = useNotification();
  const [createProject] = useMutation(CREATE_PROJECT, {
    onCompleted: () => {
      history.goBack();
      setNotification({
        open: true,
        message: "Project created",
        type: "success",
      });
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setProject({ ...project, image: objectUrl });
    } else {
      setProject({
        ...project,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    createProject({ variables: project });
  };

  return (
    <div>
      <h2>Create Project</h2>
      <Upload image={project.image} onChange={onChange} />
      <TextField
        name="name"
        label="Project Name"
        type="text"
        onChange={onChange}
      />
      <TextField
        name="description"
        label="Project Description"
        type="text"
        multiline
        onChange={onChange}
      />
      <TextField
        name="startDate"
        type="date"
        label="Start Date Project"
        onChange={onChange}
      />
      <TextField
        name="endDate"
        type="date"
        label="End Date Project"
        onChange={onChange}
      />
      <TextFieldIcon
        name="time"
        label="Add time"
        type="number"
        icon={<AccessAlarmIcon />}
        onChange={onChange}
      />
      <TextFieldIcon
        name="members"
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

export default CreateProject;
