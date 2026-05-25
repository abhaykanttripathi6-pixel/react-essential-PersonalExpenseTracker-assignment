import React, { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useExpense = () => {

    const [formInputs, setFormInputs] = useState({
        description: '',
        amount: '',
        category: '',
        date:''
    });

    const [expense, setExpense] = useLocalStorage("expenseList", []);

    const addExpense = () => {
        const { description, amount, category, date } = formInputs;

        if (amount <= 0 && amount !== '') {
            alert('Amount should neither be negative nor be 0.');
            return;
        }

        if (!description || !amount || !category || !date) return;
        setExpense(prev => [...prev, { id: new Date(date).getTime() , ...formInputs }]);
        setFormInputs({
            description: '',
            amount: '',
            category: '',
            date:''
        })

    }

    return {
        formInputs,
        setFormInputs,
        expense,
        setExpense,
        addExpense
    }
};

export default useExpense;