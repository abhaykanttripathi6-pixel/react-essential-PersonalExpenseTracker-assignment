import React, { useEffect, useState } from 'react';
import useExpenseSummary from '../hooks/useExpenseSummary';
import BarCharts from './BarCharts';
import Button from './Button';

const Summary = ({ expense }) => {

  const [showMonthlyExp, setShowMonthlyExp] = useState(false);

  const { total, food, transport, bills, entertainment, shopping, others } = useExpenseSummary(expense);

  const foodValue = (food / total) * 360;
  const transportValue = (transport / total) * 360 + foodValue;
  const entertainmentValue = (entertainment / total) * 360 + transportValue;
  const billsValue = (bills / total) * 360 + entertainmentValue;
  const shoppingValue = (shopping / total) * 360 + billsValue;
  const othersValue = (others / total) * 360 + shoppingValue;


  return (
    <div className='w-full bg-indigo-800 text-lg font-bold  rounded-sm   rounded-t-4xl inset-shadow-sm inset-shadow-[rgba(0,0,0,0.3)] sm:rounded-md  sm:rounded-t-[5rem]' >

      <div className='p-5 flex justify-between items-center sm:p-10'>
        <h2 className=' text-base font-bold text-center text-white sm:text-3xl'>{showMonthlyExp ?'Monthly Expenditure':'Total Expenditure'}</h2>
        <Button handleEvent={() => setShowMonthlyExp(!showMonthlyExp)}>Show {showMonthlyExp ? 'Total Expenditure' : 'Monthly Expenditure'}</Button>
      </div>


      {showMonthlyExp ?

        showMonthlyExp && <BarCharts totalExp = {total} expense={expense} />
        :
        <div className='p-2 flex flex-col justify-center items-center gap-5 sm:gap-10 md:flex-row md:p-5 md:gap-20'>

          <div className={`expenseGraph size-60 rounded-full grid place-content-center shadow-[inset_1px_1px_10px_5px_rgba(0,0,0,0.3)]} sm:size-80 lg:size-100`}
            style={{
              background: `${total === 0 ? 'gray' : `conic-gradient( darkblue 0deg ${foodValue}deg, blue ${foodValue}deg ${transportValue}deg, #00be00  ${transportValue}deg ${entertainmentValue}deg, #ffd230 ${entertainmentValue}deg  ${billsValue}deg,  magenta ${billsValue}deg ${shoppingValue}deg, red ${shoppingValue}deg ${othersValue}deg )`}`
            }}
          >
            <div className="total size-40 bg-white rounded-full grid place-content-center text-center shadow-[inset_1px_1px_20px_10px_rgba(0,0,0,0.25)] sm:size-50 lg:size-65">
              <h3 className='text-base sm:text-xl'>Total Expenses</h3>
              <span className='text-lg sm:text-2xl'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total || 0)}</span>
            </div>
          </div>

          <div className='p-3 bg-white rounded-xl grid grid-cols-2 gap-2 shadow-[1px_1px_10px_3px_rgba(0,0,0,0.2)] sm:h-30 sm:p-5 lg:grid-cols-3 '>

            <div className='text-sm font-medium flex items-center gap-2 sm:text-sm'>
              <span className='inline-block size-4 bg-[darkblue] rounded-full lg:size-5'></span>
              <span>Food</span>
            </div>

            <div className='text-sm font-medium flex items-center gap-2'>
              <span className='inline-block size-4 bg-[blue] rounded-full lg:size-5'></span>
              <span>Transport</span>
            </div>
            <div className='text-sm font-medium flex items-center gap-2'>
              <span className='inline-block size-4 bg-[#00be00] rounded-full lg:size-5'></span>
              <span>Entertainment</span>
            </div>
            <div className='text-sm font-medium flex items-center gap-2'>
              <span className='inline-block size-4 bg-amber-300 rounded-full lg:size-5'></span>
              <span>Bills</span>
            </div>
            <div className='text-sm font-medium flex items-center gap-2'>
              <span className='inline-block size-4 bg-[magenta] rounded-full lg:size-5'></span>
              <span>Shopping</span>
            </div>
            <div className='text-sm font-medium flex items-center gap-2'>
              <span className='inline-block size-4 bg-[red] rounded-full lg:size-5'></span>
              <span>Others</span>
            </div>
          </div>

        </div>
      }


    </div>
  )
};

export default Summary;
