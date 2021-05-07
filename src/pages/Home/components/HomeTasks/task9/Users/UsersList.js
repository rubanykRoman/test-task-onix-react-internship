import React from 'react'
import withGetCrud from '../withGetCrud'
import usersApi from './usersApi'


function UsersList({ list, remove }) {
    return (
        <div>
            <h3>Clients</h3>
            <ol>
                {list.map((item) =>
                    <li key={item.id} className='user-info'>
                        {item.name} <br />
                        {item.email} <br />
                        <button onClick={() => remove(item.id)}>del</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default withGetCrud(UsersList,usersApi)
