import { useState } from "react";

export default function ExpenseList({ onAddExpense, expenses }) {
  const [amount, setAmount] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onAddExpense(value);
      setAmount("");
    }
  };

  const total = expenses.reduce((sum, e) => sum + e, 0);

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>🧾 Add Expense:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 120"
        />
        <button type="submit">Add</button>
      </form>
      <p>📊 Total Spent: {total}</p>
    </div>
  );
}
