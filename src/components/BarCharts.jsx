import React from 'react';
import { LuRadius } from 'react-icons/lu';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import chartData from '../Utilities/chartData';

const BarCharts = ({ totalExp, expense }) => {

  const data = chartData(expense);

  return (
    <div className='w-[95%] h-100 sm:m-auto'>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis dataKey={'name'} tick={{ fill: 'darkgray' }} />
          <YAxis tick={{ fill: 'darkgray', fontSize:13 }} domain={[0, totalExp]} />
          <Bar dataKey={'value'} fill='lightblue' />
          <Tooltip contentStyle={{ background: 'black', border: '2px solid white', borderRadius: '10px' }} labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} formatter={(value) => [`$${value}`, 'Expense']} cursor={{ fill: 'rgba(255,255,255,0.2)' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarCharts;
