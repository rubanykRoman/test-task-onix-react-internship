import React from 'react';
import VipUsersList from './vipUsers/VipUsersList';
import UsersList from './Users/UsersList';
import './Task9.scss';
import TaskCard from '../../../../../components/TaskCard';

const Task9 = () => {
    return (
        <>
            <TaskCard
                taskNumber="9"
            ></TaskCard>
            <div className='task-9'>
                <UsersList/>
                <VipUsersList />
            </div>
        </>
    )
}

export default Task9;