import React, { FC } from 'react';
import './App.css';
import AddItemForm from './Components/AddItemForm/AddItemForm';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import TodoList from './Components/TodoList/TodoList';



const App:FC = () => {
  
  
  
  return (
    <>
      <SearchPanel />
      <TodoList />
      <AddItemForm />
    </>
  );
}

export default App;
