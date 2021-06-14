import React, { useState } from 'react';
import Task3Table from './Task3Tables';
import '../scss/Task3.scss';
import TaskCard from '../../../components/TaskCard';

const Task3 = () => {
  const [years, setYears] = useState(['2017', '2020', '2019', '2018', '2021']);
  const [quantity, setQuantity] = useState([20456, 25876, 24200, 23263, 51004]);

  const withSortFoo = () => {
    years.sort((a, b) => a - b);
    console.log(years);
  };

  const bubbleSort = () => {
    for (let i = 0; i < quantity.length - 1; i++) {
      let flagSwap = false;
      for (let j = 0; j < quantity.length - 1 - i; j++) {
        if (quantity[j] > quantity[j + 1]) {
          [quantity[j], quantity[j + 1]] = [quantity[j + 1], quantity[j]];
          flagSwap = true;
        }
      }
      if (!flagSwap) break;
    }
    console.log(quantity);
  };

  const addItem = () => {
    years.push('new item');
    console.log(years);
  };

  const removeItem = () => {
    years.pop();
    console.log(years);
  };

  return (
    <div className="task-3">
      <TaskCard taskNumber="3" />
      <Task3Table
        withSortFoo={withSortFoo}
        bubbleSort={bubbleSort}
        years={years}
        quantity={quantity}
      />
      <button onClick={addItem}>ADD</button>
      <button onClick={removeItem}>REMOVE</button>
    </div>
  );
};

export default Task3;
