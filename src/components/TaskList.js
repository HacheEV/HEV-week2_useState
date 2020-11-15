import TaskListNotDone from "./TaskListNotdone";
import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    if(props.tasks.length === 0){
    return <div className='noTareas'>No hay tareas en esta página</div>
    }
  return(
    <div className='TaskList'>
      {props.tasks.map(task => <Task done={task.done} title={task.title}/>)}
    </div>
  )
  };
export default TaskList;