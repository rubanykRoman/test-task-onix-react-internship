import React from 'react';

const UsersList = ({ contacts, deleteContact}) => {
    return (
        <div>
            <h3>Contacts</h3>
            <ol>
                {contacts.map((item) =>
                    <li key={item.id} className='user-info'>
                        {item.name} <br />
                        {item.email} <br />
                        <button onClick={() => deleteContact(item.id)}>del</button>
                    </li>
                    )}
            </ol>
        </div>
    )
}

export default UsersList;