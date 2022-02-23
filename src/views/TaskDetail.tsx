import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '../components/inputs/TextField';
import Button from '../components/Button'

const TaskDetail = (): JSX.Element => 
      <Container maxWidth="sm">
        <h3>Tache détaillé</h3>
        <TextField onChange={() => {}} label="email" name="Email" type="text"/>
        <TextField onChange={() => {}} label="password" name="Password" type="password" />
        <TextField onChange={() => {}} label="confirmPassword" name="Confirm Password" type="password"/>
        <Button name="Sign up" action={() => {}}/>
      </Container>
  

export default TaskDetail;