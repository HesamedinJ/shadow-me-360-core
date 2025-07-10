import { useState } from "react";

export default function BudgetInput({ onSubmit }) {
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(budget);
    if (!isNaN(value) && value > 0) {
      onSubmit(value);
      setBudget("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>💰 Monthly Budget:</label>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="e.g. 5000"
      />
      <button type="submit">Save</button>
    </form>
  );
}
