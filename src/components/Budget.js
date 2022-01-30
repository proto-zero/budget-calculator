import React, { useState } from "react";
import './Budget.css';

function Budget(props) {
    // State
    const [budget, setBudget] = useState(0);    // State to store the user budget

    // Functions
    function budgetHandler(event) {             
        const userBudget = event.target.value;  // Grabs the user input
        setBudget(userBudget);                  // Sets the state with user input
        props.onGetBudget(budget);              // Passes state up to App
    }

    // JSX
    return (
        <div className="budget">
            <h3>What is your budget?</h3>
            {/* Input is styled after the email submission on the Yardzen homepage */}
            <input type="number" onChange={budgetHandler} placeholder="Budget" />
            <h3 className="budget-highlight">Target Budget: {props.formatter.format(budget)}</h3>
        </div>
    );
}

export default Budget;