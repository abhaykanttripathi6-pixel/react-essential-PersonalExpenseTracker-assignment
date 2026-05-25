import React from 'react'

const Sort = ({totalExpenses,handleSortVal}) => {

    return (
        <div className='flex justify-between items-center'>

            <div className='p-1 border-2 bg-white text-sm font-semibold rounded-lg sm:px-2 sm:py-1 sm:text-base'>
                <span>Expenses {totalExpenses}</span>
            </div>

            <div>
                <select className='w-30 py-1 border-2 bg-white outline-none text-xs font-semibold rounded-lg cursor-pointer sm:w-40 sm:px-2 sm:text-base' onChange={(e)=>handleSortVal(e)}>
                    <option value="default" >Default</option>
                    <option value="High to Low">High to Low</option>
                    <option value="Low to High">Low to High</option>
                    <option value="Newest to Oldest">Newest to Oldest</option>
                    <option value="Oldest to Newest">Oldest to Newest</option>
                </select>
            </div>

        </div>
    )
}

export default Sort
