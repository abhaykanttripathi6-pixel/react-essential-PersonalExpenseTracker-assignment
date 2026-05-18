import React from 'react';
import ExpenseItem from './ExpenseItem';
import useExpense from '../hooks/useExpense';

const ExpenseList = ({ expense, setExpense, filterExp }) => {

    const expenseToShow = filterExp ? filterExp : expense;

    const handleDelete = (id) => {
        const verification = confirm('do you want to remove this expense item from the list?');
        if (verification) {
            const UpdatedExpList = expense.filter((list) => list.id !== id);
            setExpense(UpdatedExpList);
        }
        return;
    }

    return (
        <section className='expense-list'>
            <div className="expenseItems-wrapper h-70 py-3 rounded-md overflow-y-auto">
                {expense.length !== 0 ?
                    expenseToShow.length !== 0 ?
                        expenseToShow.map((expenseItems) => {
                            const data = expenseItems
                            return <ExpenseItem key={data.id} {...data} handleDelete={handleDelete} />
                        })
                        :
                        <div className='h-50 text-gray-500 text-lg italic font-medium grid place-content-center'>No expenses match your Filter. Try adjusting your filter criteria.</div>
                    :
                    <div className='h-50 text-black text-xl font-semibold grid place-content-center'>Your List is Empty.</div>
                }
            </div>
        </section>
    )
};

export default ExpenseList;
