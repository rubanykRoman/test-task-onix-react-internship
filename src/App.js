import React from 'react';
import './App.scss';
import ThemeProvider from './contexts/themeContext';
import TestTask from './pages/TestTask/TestTask';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeTasks from './pages/HomeTasks/HomeTasks';
import HeaderLinks from './components/HeaderLinks/HeaderLinks';
import StartPage from './pages/StartPage/StartPage';
import GlobalFooter from './components/GlobalFooter/GlobalFooter';

const App = () => (
  <ThemeProvider>
    <Router>
      <HeaderLinks/>
        <Switch>
          <Route path="/" exact component={StartPage}></Route>
          <Route path="/testtask" exact component={TestTask}></Route>
          <Route path="/hometasks" component={HomeTasks}></Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      <GlobalFooter/>
    </Router>
  </ThemeProvider>
);

export default App;
