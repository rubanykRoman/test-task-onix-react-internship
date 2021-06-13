import React from 'react';
import './HomeTasks.scss';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Task2 from './task2/Task2';
import Task3 from './task3/Task3';
import Task4 from './task4/Task4';
import Task5 from './task5/Task5';
import Task6 from './task6/Task6';
import Task7 from './task7/Task7';
import Task9 from './task9/Task9';
import Task14 from './task14/Task14';
import HomeTasksLinks from './HomeTasksLinks';

const HomeTasks = () => (
  <div className="home-tasks">
    <Router>
      <HomeTasksLinks/>
      <Switch>
        <Route path="/hometasks/task2" exact component={Task2}></Route>
        <Route path="/hometasks/task3" exact component={Task3}></Route>
        <Route path="/hometasks/task4" exact component={Task4}></Route>
        <Route path="/hometasks/task5" exact component={Task5}></Route>
        <Route path="/hometasks/task6" exact component={Task6}></Route>
        <Route path="/hometasks/task7" exact component={Task7}></Route>
        <Route path="/hometasks/task9" exact component={Task9}></Route>
        <Route path="/hometasks/task14" exact component={Task14}></Route>
        <Route path="*">
          <Redirect to="/hometasks" />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default HomeTasks;
