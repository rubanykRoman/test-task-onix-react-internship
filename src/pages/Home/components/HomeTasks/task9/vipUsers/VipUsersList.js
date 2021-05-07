import React from 'react';
import withGetCrud from '../withGetCrud';
import vipUsersApi from './vipUsersApi';

function VipUsersList({ list, remove }) {
    return (
        <div>
            <h3>VIP Clients</h3>
            <ol>
                {list.map((item) =>
                    <li key={item.id} className='user-info'>
                        {item.name}<br />
                        {item.phone}<br />
                        <button onClick={() => remove(item.id)}>del</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default withGetCrud(VipUsersList, vipUsersApi)