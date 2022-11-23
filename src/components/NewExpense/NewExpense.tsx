import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { Expense } from "../../types/expenses";

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (expense: Expense) => void;
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpenseData={onAddExpense} cancelAddExpense={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
