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
      console.log(updateError);
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
      console.log("DATA PROJECT: ", data.project);
      setProject(data.project);
      // console.log("project", project);
    }
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
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
    console.log("SUBMIT: ", project);
    updateProject({ variables: { ...project } });
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
