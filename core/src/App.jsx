import { useState } from "react";
import BudgetInput from "./components/BudgetInput";
import ExpenseList from "./components/ExpenseList";

export default function App() {
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (value) => {
    setExpenses([...expenses, value]);
  };

  const total = expenses.reduce((sum, e) => sum + e, 0);
  const remaining = budget !== null ? budget - total : null;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>💸 Budget Simulator</h1>
      {!budget && <BudgetInput onSubmit={setBudget} />}
      {budget && (
        <>
          <p>✅ Monthly Budget: {budget}</p>
          <ExpenseList onAddExpense={addExpense} expenses={expenses} />
          <p>
            {remaining < 0
              ? `⚠️ You are over budget by ${-remaining}`
              : `🟢 Remaining budget: ${remaining}`}
          </p>
        </>
      )}
    </div>
  );
}
