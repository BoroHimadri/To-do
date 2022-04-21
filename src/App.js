import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import TodoList from './TodoList';

function App() {
  const LOCAL_STORAGE_KEY = "lists";
  const [lists, setLists] = useState([]);
 
  const addTodoHandler = (list) =>{
    console.log(list);
    setLists([...lists,list]);
  }

useEffect(() => {
 const retrievelist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 if(retrievelist) setLists(retrievelist);
}, []);

useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(lists));
}, [lists]);

return (
    <div className='ui container'>
      <Header/> 
      <Todo addTodoHandler={addTodoHandler}/>
      <TodoList lists={lists}/>
    </div>
  );
};

export default App;
