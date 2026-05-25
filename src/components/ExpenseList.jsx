import React, {useEffect, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Sort from './Sort';
import sortExpense from '../Utilities/SortExpense';

const ExpenseList = ({ expense, setExpense, filterExp, showModal, setShowModal, setExpenseToRemove }) => {

    const [sortVal, setSortVal] = useState('default');

    const expData = filterExp ? filterExp : expense;

    const expenseToShow = sortExpense(expData,sortVal);

    const handleSortVal = (e) => {
       return setSortVal(e.target.value)
    }
    
    return (
        <section className='expense-list'>
            <div className=" p-5 bg-gray-200 rounded-md">
                {expense.length !== 0 ?
                    <>
                        <Sort totalExpenses={expenseToShow.length} handleSortVal={handleSortVal}/>
                        {
                            expenseToShow.length !== 0 ?
                                expenseToShow.map((expenseItems) => {
                                    const data = expenseItems
                                    return <ExpenseItem key={data.id} expenseDetail={data} setShowModal={setShowModal} setExpenseToRemove={setExpenseToRemove} />
                                })
                                :
                                <div className='h-20 text-gray-500 text-lg italic font-medium grid place-content-center'>No expenses match your Filter. Try adjusting your filter criteria.</div>
                        }
                    </>
                    :
                    <div className='h-20 text-black text-xl font-semibold grid place-content-center'>Your List is Empty.</div>
                }
            </div>
        </section>
    )
};

export default ExpenseList;
