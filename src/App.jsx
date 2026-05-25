import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Filter from './components/Filter';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import useExpense from './hooks/useExpense';
import useFilter from './hooks/useFilter';
import Button from './components/Button';
import Modal from './components/Modal';
import useUpdateAndDelete from './hooks/useUpdateAndDelete';

const App = () => {

  const expenseData = useExpense();

  const { expenseToRemove, setExpenseToRemove, setConfirmDel } = useUpdateAndDelete(expenseData.expense, expenseData.setExpense);

  const [filterVal, setFilterVal] = useState({
    category: 'All',
    description: '',
    date:''
  });
  

  const [showModal, setShowModal] = useState({
    addExpenseModal: false,
    delModal: false,
    editModal: false
  });
  

  const filterExp = useFilter(expenseData.expense, filterVal);

  return (
    <div className={`w-full rounded-md relative${showModal.editModal || showModal.delModal || showModal.addExpenseModal ? 'w-screen fixed' : ''}`}>

      <header className='py-6 px-5 sm:py-8 sm:px-10 bg-blue-900 flex justify-between'>
        <h1 className='text-xl text-white sm:text-4xl font-bold'>Personal Expense Tracker</h1>
        <Button handleEvent={() => {
          setShowModal(prev => ({ ...prev, addExpenseModal: true }));
        }}>Add Expense</Button>
      </header>

      <main>
        <div className='p-5 sm:py-10 sm:px-20 '>
          <Filter filterVal={filterVal} setFilterVal={setFilterVal} />
          <ExpenseList expense={expenseData.expense} setExpense={expenseData.setExpense} filterExp={filterExp} showModal={showModal} setShowModal={setShowModal} setExpenseToRemove={setExpenseToRemove} />
        </div>
        <Summary expense={expenseData.expense} />
      </main>

      {
        Object.keys(showModal).some(val => showModal[val] === true) && <Modal showModal={showModal} setShowModal={() => {setShowModal({
          addExpenseModal: false,
          delModal: false,
          editModal: false
        })}} expenseData={expenseData} setConfirmDel={setConfirmDel} expenseToUpdate={expenseToRemove} setExpenseToRemove={setExpenseToRemove} setFormInputs={expenseData.setFormInputs}/>
      }

    </div>
  )
};

export default App;
