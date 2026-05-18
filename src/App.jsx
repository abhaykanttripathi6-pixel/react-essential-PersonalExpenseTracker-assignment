import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import Filter from './components/Filter';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import useExpense from './hooks/useExpense';
import useFilter from './hooks/useFilter';

const App = () => {

  const expenseData  = useExpense();

  const [filterVal, setFilterVal] = useState({
        category: 'All',
        description: '',
        minAmt: '',
        maxAmt: '',
    });

   const filterExp =  useFilter(expenseData.expense, filterVal);

  return (
    <div className='min-h-170 p-3 bg-white rounded-md md:p-5'>
      <header className='text-center p-2'>
        <h1 className='text-3xl font-bold'>Personal Expense Tracker</h1>
      </header>
      <main>
        <ExpenseForm {...expenseData}/>
        <Filter filterVal={filterVal} setFilterVal={setFilterVal} />
        <ExpenseList expense={expenseData.expense} setExpense={expenseData.setExpense} filterExp={filterExp}/>
        <Summary expense={expenseData.expense}/>
      </main>
    </div>
  )
};

export default App;
