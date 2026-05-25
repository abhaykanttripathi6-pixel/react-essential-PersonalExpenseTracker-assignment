import React from 'react';

const useExpenseSummary = (expense) => {


    const total = expense.reduce((acc, currentVal) => {
            acc = acc + Number(currentVal.amount);
            return acc;
        }, 0);
      
    const food = expense.filter((expItem) => expItem.category === 'Food').reduce((acc, currentExp) => {
            acc = acc + Number(currentExp.amount);
            return acc;
        }, 0);

    const transport = expense.filter((expItem) => expItem.category === 'Transport').reduce((acc, currentExp) => {
            acc = acc + Number(currentExp.amount);
            return acc;
        }, 0);

    const bills = expense.filter((expItem) => expItem.category === 'Bill').reduce((acc, currentExp) => {
            acc = acc + Number(currentExp.amount);
            return acc;
        }, 0);

    const entertainment = expense.filter((expItem) => expItem.category === 'Entertainment').reduce((acc, currentExp) => {
            acc = acc + Number(currentExp.amount);
            return acc;
        }, 0)

    const shopping = expense.filter((expItem) => expItem.category === 'Shopping').reduce((acc, currentExp) => {
            acc = acc + Number(currentExp.amount);
            return acc;
        }, 0);

    const others = expense.filter((expItem) => expItem.category === 'Other').reduce((acc, currentExp) => {
            acc = acc + Number(currentExp.amount);
            return acc;
        }, 0);

    return {
        total,
        food,
        transport,
        bills,
        entertainment,
        shopping,
        others
    };
}

export default useExpenseSummary;
