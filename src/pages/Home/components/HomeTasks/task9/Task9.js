import { React, useState } from 'react';
import VipUsersList from './vipUsers/VipUsersList';
import UsersList from './Users/UsersList';
import './Task9.scss';

export default function Task9({isLoading, error}) {

    return (
        <>
            <h3>Task-9</h3>
            <div className='task-9'>
                <UsersList/>
                <VipUsersList />
            </div>
        </>
    )
}
