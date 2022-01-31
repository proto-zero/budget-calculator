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
                    href="https://yardzen.com/?g_network=g&g_adid=509647086913&g_keyword=yardzen&g_adtype=search&g_adgroupid=117304615142&g_keywordid=aud-1529987150837:kwd-1210559566014&g_campaignid=12619029307&g_campaign=%5BG%5D+Brand+Search+2021&g_acctid=251-347-1966&gclid=Cj0KCQiAxc6PBhCEARIsAH8Hff36TD1t-h6SB9KuiNGH-pYZpn6bmd4wOL4hSqwuBDeDqIYf9aN44EIaAoptEALw_wcB"
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