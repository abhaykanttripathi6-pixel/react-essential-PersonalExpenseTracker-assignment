import React from 'react';

const useFilter = (expense, filterVal) => {
     let filterExp = expense; 
     if(filterVal.description !== ''){
       filterExp = filterExp.filter((exp)=> exp.description.toLowerCase().includes(filterVal.description.toLowerCase()));
     }

     if(filterVal.category !== 'All'){
       filterExp = filterExp.filter((exp)=> exp.category === filterVal.category);
     }

     if(filterVal.minAmt !== ''){
       filterExp = filterExp.filter((exp)=> filterVal.maxAmt?exp.amount < filterVal.maxAmt && exp.amount > filterVal.minAmt :exp.amount >= filterVal.minAmt);
     }

     if(filterVal.maxAmt !== ''){
       filterExp = filterExp.filter((exp)=> exp.amount <= filterVal.maxAmt);
     }

  return filterExp;
}

export default useFilter;
