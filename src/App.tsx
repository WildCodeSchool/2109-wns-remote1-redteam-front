import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Tasks from './components/Tasks/Tasks';
import Users from './components/Users/Users';
import Projects from './components/Projects/Projects';
import Signup from './components/Admin/Signup';
import './App.css';


function App(): JSX.Element {

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div style={{display : 'flex'}}>
      < Navbar />
      <Switch>
        <Route path="/" exact>
          <Dashboard/>
        </Route>
        <Route path="/tasks">
          <Tasks/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Switch>
      </div>
    </Router>
    </ThemeProvider >
  )

}

export default App;
