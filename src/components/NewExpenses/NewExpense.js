import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (prop) => {
  const buttonClickHandler = () => {
    setIsEditing(true);
  };
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    prop.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={buttonClickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          setIsEditing={setIsEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
