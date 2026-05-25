import React from 'react';

const useFilter = (expense, filterVal) => {
  
     let filterExp = expense; 
     if(filterVal.description !== ''){
       filterExp = filterExp.filter((exp)=> exp.description.toLowerCase().includes(filterVal.description.toLowerCase()));
     }

     if(filterVal.category !== 'All'){
       filterExp = filterExp.filter((exp)=> exp.category === filterVal.category);
     }

     if(filterVal.date !== ''){
       filterExp = filterExp.filter((exp)=> exp.date === filterVal.date);
     }

     

  return filterExp;
}

export default useFilter;
