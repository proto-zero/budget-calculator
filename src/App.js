import React, { useState } from 'react';
import Budget from './components/Budget';
import Outline from './components/outline';
import './App.css';

function App() {
  // State
  const [userBudget, setUserBudget] = useState(0);  // State to store the user budget

  // Functions
  function getBudget(budgetState) {                 // Function to pull up the user budget from budget component
    setUserBudget(budgetState);
  }

  var formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });

  // JSX
  return (
    <div className="app">
      <Budget onGetBudget={getBudget} formatter={formatter} />            {/* Grabs the user budget */}
      <Outline userBudgetValue={userBudget} formatter={formatter} />      {/* Passes the user budget down */}
    </div>
  );
}

export default App;
