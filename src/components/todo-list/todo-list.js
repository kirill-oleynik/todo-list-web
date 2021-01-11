import React from 'react';
import './todo-list.css';
import TodoListHeader from '../todo-list-header';
import AddTaskForm from '../add-task-form';
import Task from '../task';

const TodoList = () => (
  <div className='todo-list'>
    <TodoListHeader />
    <AddTaskForm />
  <ul>
  <Task isDone title='Buy milk' />
  <Task isDone title='Write test app' />
  </ul>
  </div>
);
export default TodoList;
