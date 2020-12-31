import React from 'react';
import './body.css';
import TodoList from '../todo-list';
import AddTodoListButton from '../add-todo-list-button';

const Body =() => (
  <div className='body'>
  <TodoList />
  <AddTodoListButton />
  </div>
);
export default Body;
