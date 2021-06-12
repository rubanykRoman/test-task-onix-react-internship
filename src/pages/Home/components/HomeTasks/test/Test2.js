import React, { useState } from 'react';

const initialValue = [
  { title: 'learn React' },
  { title: 'pass Exam' },
  { title: 'have fun' }
];
  
const Todo = () => {
  const [todoList, setTodoList] = useState(initialValue);
  const [todo, setTodo] = useState({ title: '' });
    
  const onInputChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  }; 
    
  const onSubmitForm = (e) => {
    e.preventDefault();
      
    setTodoList([...todoList, todo]);
    setTodo({ title: '' });
  };
    
  return (
    <>
      <ul>
        {todoList.map((item) => <li key={item.title + Date.now()}>{item.title}</li>)}
      </ul>
      <form onSubmit={onSubmitForm}>
        <input
          value={todo.title}
          onChange={onInputChange}
        />
        <br />
        <button>Add</button>
      </form>  
    </>
  );
};
  
export default Todo;
