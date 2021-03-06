import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { ThemeProvider } from "@mui/material/styles";
import { NotificationProvider } from "./NotificationContext";
import theme from "./theme/theme";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import Tasks from "./views/Tasks";
import Users from "./views/Users";
import ProjectsView from "./views/Projects";
import Signup from "./views/SignUp";
import ProjectDetail from "./views/ProjectDetail";
import SnackBar from "./components/SnackBar";
import "./App.css";
import CreateProject from "./views/CreateProject";
import UpdateProject from "./views/UpdateProject";
import Signin from "./views/SignIn";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NotificationProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <div style={{ display: "flex" }}>
              <Navbar />
              <SnackBar />
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/project/update/:id">
                  <UpdateProject />
                </Route>
                <Route path="/project/:id">
                  <ProjectDetail />
                </Route>
                <Route path="/createProject">
                  <CreateProject />
                </Route>
                <Route path="/tasks">
                  <Tasks />
                </Route>
                <Route path="/projects">
                  <ProjectsView />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/login">
                  <Signin />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </NotificationProvider>
    </ApolloProvider>
  );
}

export default App;
