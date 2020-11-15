import React from 'react';
import data from '../tasks.json';

export const usePagination = () =>{
    
    const PageSize = 10;
    const [totaltasks, setTotalTasks] = React.useState(data.tasks);  
    const [page, setPage] = React.useState(0);
    const [search, setSearch] = React.useState('');
    const filteredTasks = totaltasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
    const filterPageTasks = filteredTasks.slice(page * PageSize, (page+1) * PageSize);
    const lastPage = Math.ceil(filteredTasks.length / PageSize);
  
       
    return{
      search: {
        value: search, 
        setSearch,
      },
      tasks :{
        taskList: totaltasks, 
        setTotalTasks, 
        filteredTasks, 
        filterPageTasks, 
      },
      pagination: {

        page,
        isLastPage: page === lastPage,
        isFirstPage: page === 0,
        PageSize, 
        lastPage, 
      
        nextPage: () => {
          if(page + 1 < lastPage) {
            setPage(page+1);
            }
          },
        prevPage: () => {
          if(page > 0) {
            setPage(page-1);
          }
        },
        reset: () => setPage(0),
      }
    } 
};
 