import React from 'react';
import './add-task-form.css';

const AddTaskForm = () => {
  return(
    <div className='add-task-form'>
    <div class="input-group input-group-sm mb-3">
    </div>
    <div class="input-group-prepend">
    <input placeholder='Start typing here to create task...' type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
      <button class="btn" type="button">Add task</button>
    </div>
    </div>
  );
};
export default AddTaskForm;
