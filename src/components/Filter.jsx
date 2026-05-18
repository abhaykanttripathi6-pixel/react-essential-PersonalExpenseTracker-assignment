import React, { useEffect, useState } from 'react';
import useFilter from '../hooks/useFilter';

const Filter = ({filterVal, setFilterVal}) => {


return (
    <section className='filter-section my-6'>
         <h2 className='my-2 text-xl text-black font-semibold'>Filter:</h2>
        <div className='flex flex-col gap-3 md:flex-row'>

            <div className="flex flex-col gap-1 text-sm font-semibold">
                <label htmlFor="categorey">Categorey</label>
                <select id='categorey' className='p-2 border border-gray-400 text-sm text-gray-500 rounded' value={filterVal.category} onChange={(e) => setFilterVal(prev => {
                    return {
                        ...prev,
                        category: e.target.value
                    }
                })}>
                    <option value="All">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Transport">transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Others">Other</option>
                </select>
            </div>

            <div className="flex flex-col gap-1 text-sm font-semibold">
                <label htmlFor="search-des">Search Description</label>
                <input id='search-des' type="text" placeholder='Search expenses...' className='p-2 border border-gray-400 text-sm text-gray-600 rounded' value={filterVal.description} onChange={(e) => setFilterVal(prev => {
                    return {
                        ...prev, description: e.target.value
                    }
                })
                } />
            </div>

            <div className="flex flex-col gap-1 text-sm font-semibold">
                <label htmlFor="minAmt">Min Amount</label>
                <input id='minAmt' type="text" placeholder='0.00' className='p-2 border border-gray-400 text-sm text-gray-600 rounded' value={filterVal.minAmt} onChange={(e) => setFilterVal(prev => {
                    return {
                        ...prev, minAmt: e.target.value
                    }
                })
                } />
            </div>

            <div className="flex flex-col gap-1 text-sm font-semibold">
                <label htmlFor="maxAmt">Max Amount</label>
                <input id='maxAmt' type="text" placeholder='0.00' className='p-2 border border-gray-400 text-sm text-gray-600 rounded' value={filterVal.maxAmt} onChange={(e) => setFilterVal(prev => {
                    return {
                        ...prev, maxAmt: e.target.value
                    }
                })
                } />
            </div>
        </div>
    </section>
)
};

export default Filter;
