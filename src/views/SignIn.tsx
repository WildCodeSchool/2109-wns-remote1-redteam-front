import React, { useState } from 'react';
import axios from 'axios';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '../components/inputs/TextField';
import Button from '../components/Button';
import { apiUrl } from './../settings';



function Signin(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password
    }, {withCredentials: true});
    console.log(response.data);
  }

  return (
      <Container maxWidth="sm">
        <h3>Login</h3>
        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="email" label="Email" type="text"/>
        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} name="password" label="Password" type="password" />
        <Button name="Log in" action={onSubmit} />
      </Container>
  );
}

export default Signin;