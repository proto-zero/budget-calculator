import React, { useState } from 'react';
import Budget from './components/Budget';
import Outline from './components/outline';
import './App.css';

function App() {
  const [userBudget, setUserBudget] = useState(0);

  function getBudget(budgetState) {
    setUserBudget(budgetState);
  }

  return (
    <div className="app">
      <Budget onGetBudget={getBudget} />
      <Outline userBudgetValue={userBudget} />
    </div>
  );
}

export default App;
