import React, { useState } from 'react';
import Budget from './components/Budget';
import Outline from './components/outline';
import './App.css';

function App() {
  const [userBudget, setUserBudget] = useState(0);  // State to store the user budget

  function getBudget(budgetState) {                 // Function to pull up the user budget from budget component
    setUserBudget(budgetState);
  }

  return (
    <div className="app">
      <Budget onGetBudget={getBudget} />            {/* Grabs the user budget */}
      <Outline userBudgetValue={userBudget} />      {/* Passes the user budget down */}
    </div>
  );
}

export default App;
