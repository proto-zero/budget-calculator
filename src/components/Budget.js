import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import logo from '../yardzenLogo.png';
import './Budget.css';

function Budget(props) {
    // State
    const [budget, setBudget] = useState(0);        // State to store the user budget

    useEffect(() => {
        props.onGetBudget(budget);
    }, [budget])

    // Functions
    function budgetHandler(event) {             
        const userBudget = event.target.value;      // Grabs the user input
        setBudget(userBudget);                      // Sets the state with user input
    }

    // JSX
    return (
        <div className="budget">
            <div className="img-container">
                <a 
                    href="https://yardzen.com/"
                    target="_blank">
                    <img src={logo} alt="Yardzen Logo white text on black background" />
                </a>
            </div>
            <h3>What is your budget?</h3>
            <input type="number" onChange={budgetHandler} placeholder="Budget" />
            <h3 className="budget-highlight">Target Budget: {props.formatter.format(budget)}</h3>
        </div>
    );
}

export default Budget;