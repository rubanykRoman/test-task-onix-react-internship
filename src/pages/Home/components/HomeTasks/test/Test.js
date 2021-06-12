import React, { useState } from 'react';

const initialUsers = [
  {
    name: 'Andrey',
    surname: 'Ivanov',
    phone: '0668752341',
    isDone: true,
  },
  {
    name: 'Vasya',
    surname: 'Ivanov',
    phone: '0668752345',
    isDone: false,
  },
  {
    name: 'Petya',
    surname: 'Ivanov',
    phone: '0668752348',
    isDone: false, 
  }
];
  
const stylesDone = {
  color: 'green',
  fontWeight: 'bold',
};
  
const stylesNotDone = {
  color: 'black',
};

export default function Test() {
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState({ name: '' });
  
  const onClickHandler = (phone) => {
    const item = users.find((el) => el.phone === phone);
    const newItem = { ...item, isDone: !item.isDone };
    setUsers((users) => (users.map((item) => (item.phone !== phone ? item : newItem))));
  };

  const onInputChange = (e) => {
    setUser({ ...user, name: e.target.value });
  }; 

  function onFormSubmit(e) {
    user.phone = Date.now();
    e.preventDefault();
    setUsers([...users, user]);
    setUser({ name: '' });
  }
  
  return (
    <>  
      <ul>
        {users.map((item) => (
          <li
            key={item.phone}
            onClick={() => onClickHandler(item.phone)}
            style={item.isDone === true ? stylesDone : stylesNotDone}
          >
            {item.name} 
            {' '}
            {item.phone}
          </li>
        ))}
      </ul>
      <form>
        <input 
          type="text" 
          value={user.name}
          onChange={onInputChange}
        />
        <button onClick={onFormSubmit}>Save</button>
      </form>
    </> 
  );
} 
