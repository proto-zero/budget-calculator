import React, { useState } from "react";
import './Budget.css';

function Budget() {
    const [budget, setBudget] = useState(0);

    function budgetHandler(event) {
        const userBudget = event.target.value;
        setBudget(userBudget);
    }
    return (
        <div className="budget">
            <h3>What is your budget in pennies?</h3>
            <input type="text" onChange={budgetHandler} placeholder="budget" />
            <h3 className="budget-highlight">Target Budget: {budget} pennies</h3>
        </div>
    );
}

export default Budget;