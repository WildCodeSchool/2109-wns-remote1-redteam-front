import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextFields from '../components/TextFields';
import Button from '../components/Button';

function Signin(): JSX.Element {
  return (
      <Container maxWidth="sm">
        <h3>Signup</h3>
        <TextFields name="Email" type="text"/>
        <TextFields name="Password" type="password" />
        <Button name="Log in" action={()=>{}} />
      </Container>
  );
}

export default Signin;