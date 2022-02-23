import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '../components/inputs/TextField';
import Button from '../components/Button'

function Signup(): JSX.Element {
  return (
      <Container maxWidth="sm">
        <h3>Signup</h3>
        <TextField name="email" label="Email" type="text" onChange={() => {}} />
        <TextField name="password" label="Password" type="password" onChange={() => {}} />
        <TextField name="confirmPassword" label="Confirm Password" type="password" onChange={() => {}}/>
        <Button name="Sign up" action={() => {}}/>
      </Container>
  );
}

export default Signup;