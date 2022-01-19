import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextFields from '../TextFields'
import BtnComponent from '../BtnComponent'

function Signup(): JSX.Element {
  return (
      <Container maxWidth="sm">
        <h3>Signup</h3>
        <TextFields name="Email" type="text"/>
        <TextFields name="Password" type="password" />
        <TextFields name="Confirm Password" type="password"/>
        <BtnComponent txt="Sign up" />
      </Container>
  );
}

export default Signup;