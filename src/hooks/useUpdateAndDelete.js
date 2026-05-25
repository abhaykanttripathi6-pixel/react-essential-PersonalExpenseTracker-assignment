import React, { useEffect, useState } from 'react';

const useUpdateAndDelete = (expense, setExpense) => {
  const [expenseToRemove, setExpenseToRemove] = useState(null);
  const [confirmDel, setConfirmDel] = useState(false);

  useEffect(() => {

    if (confirmDel) {
      const updatedExp = expense.filter((exp) => exp.id !== expenseToRemove.id);
      setExpense(updatedExp);
      setConfirmDel(false);
    }

  }, [expenseToRemove, confirmDel])


  return {
    expenseToRemove,
    setExpenseToRemove,
    confirmDel,
    setConfirmDel,
  }
}

export default useUpdateAndDelete;
