import React, { useState, useEffect } from 'react';
import categoriesData from '../Utilities/categoriesData';
import useExpense from '../hooks/useExpense';
import Button from './Button';

const ExpenseForm = ({ formInputs, setFormInputs, expense, setExpense, addExpense, setShowModal, editModal, expenseToUpdate, setExpenseToRemove}) => {

   const {categories, setCategories} = categoriesData();

    const handleCategoryInput = (val) => {

        setFormInputs(prev => {
            return {
                ...prev,
                category: val
            }
        })
    }

    const handleUpdateExpense = () => {

        const updatedExpenseList = expense.map((item) => {

            if (item.id === expenseToUpdate.id) {

                return {
                    ...item,
                    category: formInputs.category,
                    description: formInputs.description,
                    amount: formInputs.amount,
                    date: formInputs.date
                }
            }

            return item;
        });

        setExpense(updatedExpenseList);
        setShowModal();
        setExpenseToRemove(null);
    }

    useEffect(() => {
        if (editModal && expenseToUpdate) {
            setFormInputs({
                category: expenseToUpdate.category,
                description: expenseToUpdate.description,
                amount: expenseToUpdate.amount,
                date: expenseToUpdate.date
            });
        }
    }, [editModal, expenseToUpdate]);

    return (
        <section className='form-section'>
            <div className='form-wrapper cursor-default'>
                <h2 className='text-lg text-black font-bold'>{editModal ? 'Edit Expense:' : 'Add Expense:'}</h2>
                <form className='flex flex-col gap-3' onSubmit={(e) => e.preventDefault()}>

                    <div className='text-sm font-semibold'>
                        <span className='block my-2'>Category</span>
                        <div id='categorey' className=' text-sm rounded grid grid-cols-3 gap-2' value={formInputs.category}>

                            {
                                categories.map((categoryItems) => {

                                    const { id, Icon, category, select } = categoryItems;
                    

                                    return (
                                        <div key={id} className={`py-2 border-2 border-black flex flex-col items-center rounded-md cursor-pointer ${select || (editModal && (formInputs.category === category)) ? ' bg-blue-900 text-white' : ''}`} onClick={() => setCategories(prev =>{
                                            return prev.map((item) => item.id === id ? { ...item, select: true } : { ...item, select: false }
                                        )},
                                        handleCategoryInput(category)
                                        )}>
                                            <span className={`text-xl ${select ? 'text-white' : ''}`}>{<Icon/>}</span>
                                            <span className={`text-xs ${select ? 'text-white' : ''}`}>{category}</span>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className='flex flex-col gap-1 text-sm font-semibold'>
                        <label htmlFor="description">Description</label>
                        <input id='description' type="text" placeholder='What did you spend on?' required autoComplete='off' className='p-2 border border-gray-400 text-xs text-gray-600 rounded md:p-2 md:text-sm' value={formInputs.description} onChange={(e) => {
                            if (e.target.value.length > 49) {
                                alert('You can write description only upto 50 characters.');
                                return;
                            }

                            setFormInputs(prev => {
                                return {
                                    ...prev,
                                    description: e.target.value
                                }
                            })
                        }} />

                    </div>
                    <div className='flex flex-col gap-1 text-sm font-semibold'>
                        <label htmlFor="amt">Amount</label>
                        <input id='amt' type="number" placeholder='0.00' required className='p-2 border border-gray-400 text-sm text-gray-600 rounded ' value={formInputs.amount} onChange={(e) => {
                            if (e.target.value.length > 5) {
                                alert('You can write amount only upto 5 digits.');
                                return;
                            }
                            setFormInputs(prev => {
                                return {
                                    ...prev,
                                    amount: e.target.value
                                }
                            })
                        }} />
                    </div>

                    <div className='flex flex-col gap-1 text-sm font-semibold'>
                        <label htmlFor="dateVal">Date</label>
                        <input id='dateVal' type="date" required className='p-2 border border-gray-400 text-sm text-gray-600 rounded ' value={formInputs.date} onChange={(e) => {
                           
                            setFormInputs(prev => {
                                return {
                                    ...prev,
                                    date: e.target.value
                                }
                            })
                        }} />
                    </div>

                    {editModal ?
                        <Button handleEvent={handleUpdateExpense}>Update Expense</Button>
                        :
                        <Button type='submit' handleEvent={() => {
                            const {description, amount, category, date} = formInputs;
                            if (!description || !amount || !category || !date) return alert('Dscription, Amount, Category and Date can not empty while adding a expense.');
                            addExpense()
                            setShowModal();
                        }
                        }>Add Expense</Button>
                    }
                </form>
            </div >
        </section >
    )
};

export default ExpenseForm;
