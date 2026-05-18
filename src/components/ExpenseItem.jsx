import React from 'react';

const ExpenseItem = ({id, description, amount, category, date, handleDelete}) => {


  return (
    <div className=' p-3 my-2 bg-gray-200 border border-gray-400 flex justify-between items-center rounded-md'>
      <div className="items-details">
        <div className='max-w-30 break-all'>
            <p className='font-semibold text-xs md:text-sm'>{description}</p>
        </div>
        <div className='size-fit px-2 my-1 bg-blue-800 rounded-sm'>
            <span className='text-xs text-white font-semibold'>{category}</span>
        </div>
        <div>
            <span className='text-gray-500 text-xs md:text-sm'>{date.slice(0,10).split('-').reverse().join('-')}</span>
        </div>
      </div>

      <div className="expense-Amt">
        <span className='max-w-30 text-red-700 text-xs font-bold break-all md:text-sm'>{new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(amount)}</span>
      </div>

      <div className="size-fit py-1 px-2 bg-red-600 text-xs rounded-md cursor-pointer active:scale-95 duration-300 md:text-sm">
        <span className='text-white' onClick={()=>handleDelete(id)}>Delete</span>
      </div>
    </div>
  )
};

export default ExpenseItem;
