import React, {Component} from 'react';
import './task.css';
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <ImAttachment className='controls add-attachment' />
        <span className='controls-divider'>|</span>
        <HiArrowNarrowUp className='controls arrow-up' />
        <HiArrowNarrowDown className='controls arrow-down' />
        <span className='controls-divider'>|</span>
        <TiPencil className='controls edit' />
        <span className='controls-divider'>|</span>
        <BsTrash className='controls delete' />
  </div>
</div>
  </li>
    );
  };
  };
