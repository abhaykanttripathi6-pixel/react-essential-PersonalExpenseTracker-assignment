import React from 'react';
import useExpense from '../hooks/useExpense';

const ExpenseForm = ({ formInputs, setFormInputs, expense, setExpense, addExpense }) => {

    return (
        <section className='form-section my-4 sm:6'>
            <div className='form-wrapper'>
                <h2 className='my-2 text-xl text-black font-semibold'>Add Expense:</h2>
                <form className='flex flex-col gap-3 md:flex-row' onSubmit={(e) => e.preventDefault()}>

                    <div className='flex flex-col gap-1 text-sm font-semibold'>
                        <label htmlFor="description">Description</label>
                        <input id='description' type="text" placeholder='What did you spend on?' required autoComplete='off' className='p-2 border border-gray-400 text-xs text-gray-600 rounded md:p-2 md:text-sm' value={formInputs.description} onChange={(e) => {
                            if (e.target.value.length > 49) {
                                alert('you can wirite description only upto 50 characters.');
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
                            if (e.target.value.length > 10) {
                                alert('you can wirite amount only upto 8 characters.');
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
                        <label htmlFor="categorey">Categorey</label>
                        <select id='categorey' className='p-2 border border-gray-400 text-sm text-gray-500 rounded ' value={formInputs.category} onChange={(e) => setFormInputs(prev => {
                            return {
                                ...prev,
                                category: e.target.value
                            }
                        })}>
                            <option value="Food">Food</option>
                            <option value="Transport">Transport</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Bills">Bills</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Others">Other</option>
                        </select>
                    </div>

                    <button type='submit' className=' p-2 bg-indigo-500 text-white text-xs rounded-md  cursor-pointer hover:scale-105 active:scale-100 duration-200 md:self-end ' onClick={addExpense}>Add Expense</button>
                </form>
            </div>
        </section>
    )
};

export default ExpenseForm;
