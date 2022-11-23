import React, { FormEvent, FormEventHandler, useState } from "react";

import "./ExpenseForm.css";
import { Expense } from '../../types/expenses';

const ExpenseForm = ({onSaveExpenseData}: {onSaveExpenseData: (expense: Expense) => void}) => {
  const [expense, setExpense] = useState<Expense>({amount: 0, date: new Date(), title: ''});

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSaveExpenseData(expense);
    setExpense({amount: 0, date: new Date(), title: ''})
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expense.title}
            onChange={(e) => setExpense(prev => ({...prev, title: e.target.value }))}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={(e) => setExpense(prev => ({...prev, amount: Number(e.target.value) }))}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expense.date.toISOString().split('T')[0]}
            onChange={(e) => setExpense(prev => ({...prev, date: e.target.valueAsDate ?? new Date() }))}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
