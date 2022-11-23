import { useState } from "react";
import { Expense } from "../types/expenses";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const MainApp = () => {
  const [expenses, setExpenses] = useState<Array<Expense>>([
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expense: Expense) => {
    console.log(expense)
    setExpenses(prev => [...prev, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default MainApp;
