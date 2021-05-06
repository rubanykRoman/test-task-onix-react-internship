import React from 'react';
import withGetCrud from '../withGetCrud';
import vipUsersApi from './vipUsersApi';

function VipUsersList({ list, remove }) {
    return (
        <div>
            <h3>VIP Clients</h3>
            <ol>
                {list.map((item) =>
                    <div key={item.id} className='user-info'>
                        <li>{item.name}<br />{item.phone}</li>
                        <button onClick={() => remove(item.id)}>del</button>
                    </div>
                )}
            </ol>
        </div>
    )
}

export default withGetCrud(VipUsersList, vipUsersApi)