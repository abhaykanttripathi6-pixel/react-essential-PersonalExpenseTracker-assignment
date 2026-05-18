import React, { useEffect } from 'react';
import useExpenseSummary from '../hooks/useExpenseSummary';

const Summary = ({expense}) => {
  
  const totalExpense = useExpenseSummary(expense);
  
  
  return (
    <div className='p-3 my-2 bg-gray-200 border-gray-400 text-lg font-bold flex flex-col justify-center items-center rounded-md'>
      <h2>Total Expenses</h2>
      <span>{new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(totalExpense?totalExpense:0)}</span>
    </div>
  )
};

export default Summary;
