import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '../components/inputs/TextField';
import Button from '../components/Button';



function Signin(): JSX.Element {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
      <Container maxWidth="sm">
        <h3>Signup</h3>
        <TextField onChange={onChange} name="email" label="Email" type="text"/>
        <TextField onChange={onChange} name="password" label="Password" type="password" />
        <Button name="Log in" action={()=>{}} />
      </Container>
  );
}

export default Signin;