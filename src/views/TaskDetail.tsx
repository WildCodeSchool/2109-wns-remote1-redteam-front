import React from 'react';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextFields from '../components/TextFields';
import Button from '../components/Button'

const TaskDetail = (): JSX.Element => 
      <Container maxWidth="sm">
        <h3>Tache détaillé</h3>
        <TextFields name="Email" type="text"/>
        <TextFields name="Password" type="password" />
        <TextFields name="Confirm Password" type="password"/>
        <Button name="Sign up" action={() => {}}/>
      </Container>
  

export default TaskDetail;