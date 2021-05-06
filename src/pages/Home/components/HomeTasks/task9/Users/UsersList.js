import React from 'react'
import withGetCrud from '../withGetCrud'
import usersApi from './usersApi'


function UsersList({ list, remove }) {
    return (
        <div>
            <h3>Clients</h3>
            <ol>
                {list.map((item) =>
                    <div key={item.id} className='user-info'>
                        <li onClick={() => remove(item.id)}>{item.name} <br /> {item.email}</li>
                        <button onClick={() => remove(item.id)}>del</button>
                    </div>
                )}
            </ol>
        </div>
    )
}

export default withGetCrud(UsersList,usersApi)
