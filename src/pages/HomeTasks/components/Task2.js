import React, { useState } from 'react';
import Task2CountriesList from './Task2CountriesTable';
import Task2MemberList from './Task2MemberList';
import '../scss/Task2.scss';
import TaskCard from '../../../components/TaskCard';

const Task2 = () => {
  const [names, setNames] = useState(['Stefani Germanotta', 'Peter Parker', 'Elon Musk', 'James Howlett', 'Bruce wayne']);
  const [countriesMembers, setCountriesMembers] = useState([
    { id: 1, country: 'USA', quantity: 27002 },
    { id: 2, country: 'France', quantity: 9830 },
    { id: 3, country: 'Sweden', quantity: 5219 },
    { id: 4, country: 'Ukraine', quantity: 4450 }
  ]);

  return (
    <div className="task-2">
      <TaskCard taskNumber="2" />
      <Task2MemberList names={names} />
      <Task2CountriesList countriesMembers={countriesMembers} />
    </div>
  );
};

export default Task2;
