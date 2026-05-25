import React from 'react';
import ReactDOM from 'react-dom';
import { MdCancel } from "react-icons/md";
import ExpenseForm from './ExpenseForm';
import DeleteExpense from './DeleteExpense';


const container = document.getElementById('modal-root')

const Modal = ({ showModal, setShowModal, expenseData, setConfirmDel, expenseToUpdate, setExpenseToRemove, setFormInputs }) => {
  const { addExpenseModal, delModal, editModal } = showModal;
  return (
    ReactDOM.createPortal(
      <div className='size-full backdrop-blur-xs grid place-content-center fixed top-0 left-0 z-10'>
        <div className=' w-100 p-4 bg-white shadow-xl/20 rounded-md relative'>

          {
            (addExpenseModal || editModal) && <ExpenseForm {...expenseData} setShowModal={setShowModal} editModal={editModal} expenseToUpdate={expenseToUpdate} setExpenseToRemove={setExpenseToRemove} />
          }

          {
            delModal && <DeleteExpense setConfirmDel={setConfirmDel} setShowModal={setShowModal} />
          }

          <button className='text-red-600 absolute top-4 right-5' onClick={() => {
            setShowModal()
            setFormInputs({
              description: '',
              amount: '',
              category: '',
            })
          }}> <MdCancel className='size-6 cursor-pointer' /> </button>
        </div>
      </div>,
      container
    )
  )
}

export default Modal
