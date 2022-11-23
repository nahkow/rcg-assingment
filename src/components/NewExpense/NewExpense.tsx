import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { Expense } from '../../types/expenses';

const NewExpense = ({onAddExpense}: {onAddExpense : (expense: Expense) => void}) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onAddExpense} />
    </div>
  );
};

export default NewExpense;
