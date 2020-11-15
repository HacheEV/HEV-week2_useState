import React from 'react';
import data from '../tasks.json';



const TaskCounter = (props) => {
  
    const tasks = data.tasks;
    const notDone = tasks.filter(task => !task.done).length;
    
    return(
      <div className='TaskCounter'>
        {notDone} tasks left of {data.tasks.length}
            
      </div>
    )
  };
  
  export default TaskCounter;