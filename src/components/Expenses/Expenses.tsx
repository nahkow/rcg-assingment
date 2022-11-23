import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { Expense } from "../../types/expenses";
import ExpensesFilter from './ExpensesFilter';
import { useState } from "react";

const Expenses = ({ items }: { items: Expense[] }) => {
  const [selected, setSelected] = useState<string>('2022');
  return (
    <Card className="expenses">
      <Card>
        <ExpensesFilter selected={selected} onChangeFilter={(value) => setSelected(value)} /> 
      </Card>
      {items.filter(item => item.date.getFullYear() === Number(selected)).map((item, i) => (
        <ExpenseItem
          key={i}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
