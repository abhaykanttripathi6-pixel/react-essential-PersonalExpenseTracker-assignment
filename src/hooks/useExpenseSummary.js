import React from 'react';

const useExpenseSummary = (expense) => {
    
    if(expense.length === 0) return;
    const total = expense.reduce((acc,currentVal)=>{
        acc = acc+Number(currentVal.amount);
        return acc ;
    },0)
    return total;
}

export default useExpenseSummary;
