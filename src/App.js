import React from 'react';
import './App.scss';
import ThemeProvider from './contexts/themeContext';
import TestTask from './pages/TestTask/TestTask';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeTasks from './pages/HomeTasks/HomeTasks';
import StartPage from './pages/StartPage/StartPage';
import Layout from './layout/Layout';

const App = () => (
  <ThemeProvider>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={StartPage}></Route>
          <Route path="/testtask" exact component={TestTask}></Route>
          <Route path="/hometasks" component={HomeTasks}></Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
