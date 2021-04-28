import React from 'react';
import VipUsersList from './vipUsers/VipUsersList';
import UsersList from './Users/UsersList';
import './Task9.scss';

export default function Task9() {
    return (
        <div className='task-9'>
            <UsersList/>
            <VipUsersList/>
        </div>
    )
}
