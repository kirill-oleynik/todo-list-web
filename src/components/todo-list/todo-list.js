import React from 'react';
import './todo-list.css';
import TodoListHeader from '../todo-list-header';
import AddTaskForm from '../add-task-form';

const TodoList = () => (
  <div className='todo-list'>
    <TodoListHeader />
    <AddTaskForm />
  </div>
);
export default TodoList;
