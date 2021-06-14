import React from 'react';
import VipUsersList from './Task9VipUsersList';
import '../scss/Task9.scss';
import TaskCard from '../../../components/TaskCard';
import UsersList from './Task9UsersList';

const Task9 = () => (
  <>
    <TaskCard
      taskNumber="9"
    />
    <div className="task-9">
      <UsersList />
      <VipUsersList />
    </div>
  </>
);

export default Task9;
