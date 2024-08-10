import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleChange = (e) => {
    setExpense(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add expense submission logic here
    setExpense('');
  };

  return (
    <div className="ExpenseForm">
      <h2>Expense Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={expense}
          onChange={handleChange}
          placeholder="Enter expense"
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
