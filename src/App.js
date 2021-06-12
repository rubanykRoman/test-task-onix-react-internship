import React from 'react';
import './App.scss';
import ThemeProvider from './contexts/themeContext';
import HomePage from './pages/Home/components/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeTasks from './pages/Home/components/HomeTasks/HomeTasks';
import HeaderLinks from './components/HeaderLinks/HeaderLinks';

const App = () => (
  <ThemeProvider>
    <Router>
      <HeaderLinks/>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/hometasks" component={HomeTasks}></Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
