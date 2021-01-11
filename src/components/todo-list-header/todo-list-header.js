import React from 'react';
import './todo-list-header.css';
import {RiCalendarTodoFill} from 'react-icons/ri';
import {BsTrash} from 'react-icons/bs';
import {TiPencil} from 'react-icons/ti';

const TodoListHeader = () => (
  <div className='todo-list-header'>
  <span className='align-middle'>
  <div className='row'>
  <div className='col'>
    <RiCalendarTodoFill className='cal-icon' />
  </div>
  <div className='todolist-title col-6'>
  TOODO List Title
  </div>
  <div className='col'>
    <TiPencil className='todo-list-controls edit' />
        <span className='todo-list-controls-divider'>|</span>
    <BsTrash className='todo-list-controls delete' />
  </div>
  </div>
  </span>
  </div>
);
export default TodoListHeader;
