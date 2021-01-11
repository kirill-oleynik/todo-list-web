import React from 'react';
import './add-todo-list-button.css';
import {ImPlus} from 'react-icons/im';

const AddTodoListButton = () => (
  <div className='add-todo-list-brn-container'>
  <button className='add-todo-list-button'>
    <ImPlus className='plus-icon' />
  Add TODO List
  </button>
</div>
);
export default AddTodoListButton;
