import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import Button from './Button';
import Modal from './Modal';

const ExpenseItem = ({ expenseDetail, showModal, setShowModal, setExpenseToRemove }) => {

  const { id, description, amount, category, date } = expenseDetail;

  return (
    <div className='p-3 my-4 bg-gray-300 border border-gray-400 flex items-center rounded-md'>

      <div className="flex-1">

        <div className='w-30 break-all sm:w-50'>
          <p className='font-semibold text-xs md:text-xl'>{description}</p>
        </div>

        <div className='size-fit px-2 my-1 bg-blue-800 rounded-sm '>
          <span className='text-xs text-white font-semibold'>{category}</span>
        </div>

        <div>
          <span className='text-gray-500 text-xs md:text-sm'>{date.slice(0, 10).split('-').reverse().join('-')}</span>
        </div>
      </div>

      <div className="flex-1">
        <span className='max-w-30 text-red-700 text-sm font-bold break-all md:text-xl'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)}</span>
      </div>

      <div className='flex flex-col gap-2 sm:flex-row'>
        <Button btn={'edit'} handleEvent={() => {
          return (
            setShowModal(prev => ({ ...prev, editModal: true })),
            setExpenseToRemove(expenseDetail)
          )
        }}>
          <span className='text-lg sm:text-xl'><BiSolidEdit /></span>
          <span className='text-white'>Edit</span>
        </Button>
        <Button btn={'del'} handleEvent={() => {
          return (
            setShowModal(prev => ({ ...prev, delModal: true })),
            setExpenseToRemove(expenseDetail)
          )
        }}>
          <span className='text-base sm:text-xl'><MdDelete /></span>
          <span className='text-white'>Delete</span>
        </Button>
      </div>
    </div >
  )
};

export default ExpenseItem;
