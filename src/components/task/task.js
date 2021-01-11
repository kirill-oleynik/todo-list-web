import React, {Component} from 'react';
import './task.css';
import {BsTrash} from 'react-icons/bs';
import {TiPencil} from 'react-icons/ti';
import {HiArrowNarrowDown} from 'react-icons/hi';
import {HiArrowNarrowUp} from 'react-icons/hi';
import {ImAttachment} from 'react-icons/im';

  export default class Task extends Component {
    render(){
      const {isDone,title} = this.props;
      return (
  <li>
    <div class="col-xs-12 task">
  <div class="col-xs-3">
    <input
        className='is-done-checkbox'
      type="checkbox"
      checked={isDone}
    />
  </div>
  <div className="task-title col-xs-3">{title}</div>
  <div className="col-xs-3 contols">
        <ImAttachment className='task-controls add-attachment' />
        <span className='task-controls-divider'>|</span>
        <HiArrowNarrowUp className='task-controls arrow-up' />
        <HiArrowNarrowDown className='task-controls arrow-down' />
        <span className='task-controls-divider'>|</span>
        <TiPencil className='task-controls edit' />
        <span className='task-controls-divider'>|</span>
        <BsTrash className='task-controls delete' />
  </div>
</div>
  </li>
    );
  };
  };
