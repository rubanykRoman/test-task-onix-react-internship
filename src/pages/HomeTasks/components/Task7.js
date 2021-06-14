import React, { useState } from 'react';
import Task7List from './Task7List';
import '../scss/Task7.scss';
import TaskCard from '../../../components/TaskCard';

const Task7 = () => {
  const [finals, setFinals] = useState([
    {
      id: 1,
      year: 2020,
      winner: 'Bayern Munich',
      finalist: 'PSG',
      flagActive: false,
      flagSelected: false,
    },
    {
      id: 2,
      year: 2019,
      winner: 'Liverpool',
      finalist: 'Tottenham Hotspur',
      flagActive: false,
      flagSelected: false,
    },
    {
      id: 3,
      year: 2018,
      winner: 'Real Madrid',
      finalist: 'Liverpool',
      flagActive: false,
      flagSelected: false,
    },
    {
      id: 4,
      year: 2017,
      winner: 'Real Madrid',
      finalist: 'Juventus',
      flagActive: false,
      flagSelected: false,
    },
    {
      id: 5,
      year: 2016,
      winner: 'Real Madrid',
      finalist: 'Atletico Madrid',
      flagActive: false,
      flagSelected: false,
    },
  ]);

  const delItem = (id) => {
    setFinals(finals.filter((item) => item.id !== id));
  };

  const flagToggle = (id, e) => {
    const item = finals.find((l) => l.id === id);
    let newItem;

    if (e.type === 'click' || e.type === 'keypress') {
      newItem = { ...item, flagActive: !item.flagActive };
    }

    if (e.type === 'dragstart' || e.type === 'dragend') {
      newItem = { ...item, flagSelected: !item.flagSelected };
    }
    
    setFinals((finals) => (finals.map((item) => (item.id !== id ? item : newItem))));
  };

  const handleKeyPress = (e) => {
    const { key } = e;

    const targetFinal = finals[key - 1];
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < keys.length && i < finals.length; i++) {
      if (key == keys[i]) {
        flagToggle(targetFinal.id, e);
        break;
      }   
    }
  };

  return (
    <div tabIndex="1" onKeyPress={handleKeyPress} className="task-7">
      <TaskCard
        taskNumber="7"
        taskTitle="Finals of Champions League"
      />
      <Task7List
        finals={finals}
        delItem={delItem}
        flagToggle={flagToggle}
      />
    </div>
  );
};

export default Task7;
