import React from 'react';
import './add-task-form.css';
import {ImPlus} from 'react-icons/im';

const AddTaskForm = () => {
  return(
    <div className='add-task-form align-middle'>
    <div class="input-group input-group-sm mb-3">
    </div>
    <div class="input-group-prepend">
    <ImPlus className='task-plus-icon' />
    <input placeholder='Start typing here to create task...' type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
      <button class="btn btn-sm add-task-button" type="button">Add Task</button>
    </div>
    </div>
  );
};
export default AddTaskForm;
