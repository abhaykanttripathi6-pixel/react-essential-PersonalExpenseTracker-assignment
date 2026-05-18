import React, { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useExpense = () => {

    const [formInputs, setFormInputs] = useState({
        description: '',
        amount: '',
        category: 'Food',
    });

    const [expense, setExpense] = useLocalStorage("expenseList", []);

    const addExpense = () => {
        const { description, amount, category } = formInputs;

        if (amount <= 0 && amount !== '') {
            alert('Amount should neither be negative nor be 0.');
            return;
        }

        if (!description || !amount || !category) return;
        setExpense(prev => [...prev, { id: Date.now(), date: new Date().toISOString(), ...formInputs }]);
        setFormInputs({
            description: '',
            amount: '',
            category: 'Food',
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