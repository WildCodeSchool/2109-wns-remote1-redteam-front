import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextFields from '../components/TextFields';
import Button from '../components/Button'

function Signup(): JSX.Element {
  return (
      <Container maxWidth="sm">
        <h3>Signup</h3>
        <TextFields name="Email" type="text"/>
        <TextFields name="Password" type="password" />
        <TextFields name="Confirm Password" type="password"/>
        <Button txt="Sign up" />
      </Container>
  );
}

export default Signup;