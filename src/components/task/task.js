import React, {Component} from 'react';
import './task.css';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon className='task-control sort-up' icon={faSortUp} />
        <FontAwesomeIcon className='task-control sort-down' icon={faSortDown} />
        <span className='controls-divider'>|</span>
        <FontAwesomeIcon className='task-control edit-task' icon={faPencilAlt} />
        <span className='controls-divider'>|</span>
        <FontAwesomeIcon classname='task-control delete-task' icon={faTrashAlt} />
  </div>
</div>
  </li>
    );
  };
  };
