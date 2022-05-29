import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === year;
  });
  return (
    <ul>
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onYearChange={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart items={filteredExpenses}></ExpensesChart>
        <ExpenseList items = {filteredExpenses}/>
      </Card>
    </div>
    </ul>
  );
};
export default Expenses;
