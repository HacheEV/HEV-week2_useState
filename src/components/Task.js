import React from 'react';

const Task = (props) => {
  
    return(
     
        <div className='Task'>
            <input classname='Tasksitem' type='checkbox' checked={props.done}/>
            <span className='textTask'>{props.title}    </span>
        
            <span className='buttonTask1'><button>Clone</button></span>
            <span className='buttonTask2'><button>Delete</button></span>
        </div>
     
    )
  }
export default Task;