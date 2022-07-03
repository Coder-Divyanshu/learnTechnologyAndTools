import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import {useState} from 'react';

const NewExpense = (props) => {
const [hide, show] = useState(false);

const hideAndShowHandler = () => {
  show(true);
}

const cancelHandler =() =>{
  show(false);
}

  const expenseChangeHandler = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    show(false);
  };
  return (
    <div className="new-expense">
      {!hide && <button onClick={hideAndShowHandler}>Add new Expense</button>}
      {hide && <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={expenseChangeHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
