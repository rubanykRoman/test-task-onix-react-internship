import React, { useState } from 'react';
import Task4Table from './Task4Table';
import './Task4.scss';
import TaskCard from '../../../components/TaskCard';

const Task4 = () => {
  const [finals, setFinals] = useState([
    {
      id: 1,
      year: 2020,
      winner: 'Bayern Munich',
      finalist: 'PSG',
    },
    {
      id: 2,
      year: 2019,
      winner: 'Liverpool',
      finalist: 'Tottenham Hotspur',
    },
    {
      id: 3,
      year: 2018,
      winner: 'Real Madrid',
      finalist: 'Liverpool',
    },
    {
      id: 4,
      year: 2017,
      winner: 'Real Madrid',
      finalist: 'Juventus',
    },
    {
      id: 5,
      year: 2016,
      winner: 'Real Madrid',
      finalist: 'Atletico Madrid',
    },
  ]);

  return (
    <div className="task-4">
      <TaskCard
        taskNumber="4"
        taskTitle="Finals of Champions League"
      />
      <Task4Table finals={finals} />
    </div>
  );
};

export default Task4;
