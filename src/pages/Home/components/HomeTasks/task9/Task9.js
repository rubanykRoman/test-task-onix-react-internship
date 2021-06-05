import React from 'react';
import VipUsersList from './VipUsersList';
import './Task9.scss';
import TaskCard from '../../../../../components/TaskCard';
import UsersList from './UsersList';

const Task9 = () => 
    <>
        <TaskCard
            taskNumber="9"
        ></TaskCard>
        <div className='task-9'>
            <UsersList/>
            <VipUsersList />
        </div>
    </>

export default Task9;