import React from 'react';


const Footer = ({tasks, pagination}) => {
    
    return(
        
        <div className='pagesFooter'>
          
          <div><button onClick={pagination.prevPage}> Previous page </button></div>
          <div> Seeing page {pagination.page+1} of {pagination.lastPage} </div>
          {!pagination.isLastPage && <div><button onClick={pagination.nextPage}>Next page </button></div>}
        </div>
        
    )
};

export default Footer;