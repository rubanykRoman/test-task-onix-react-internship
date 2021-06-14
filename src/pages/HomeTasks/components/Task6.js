import React, { useState, useEffect } from 'react';
import Task6List from './Task6List';
import '../scss/Task6.scss';
import Loading from '../../../components/Loading/Loading';
import NotFound from '../../../components/NotFound/NotFound';
import TaskCard from '../../../components/TaskCard';
import {breakingBadURL} from '../../../constants/URLs'; 

const URI = '/quotes';

const Task6 = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const showAddInfo = (quote) => {
    alert(`Author: ${quote.author}, series: "${quote.series}"`);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(breakingBadURL + URI)
      .then((response) => {
        return response.json();
      })
      .then((data) => setQuotes(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);
    
  return (
    <div className="task-6">
      <TaskCard
        taskNumber="6"
        taskTitle="Breaking Bad ©"
      />
      {isLoading ? <Loading /> : <Task6List quotes={quotes} showAddInfo={showAddInfo} />}
      {error ? <NotFound /> : null }
    </div>
  );
};

export default Task6;
