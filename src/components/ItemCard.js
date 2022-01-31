import React, { useState } from "react";
import './ItemCard.css'

function Ex(props) {
    // State
    const [price, setPrice] = useState(0);          // State for individual item price

    // Functions
    function priceHandler(e) {
        const itemPrice = (e.currentTarget.value);  // Grabs the selected price
        setPrice(itemPrice);                        // Sets the state with that price
        props.onGetPrice(price);                    // Lifts state to TypeContainer
    };

    // JSX
    return (
            <div className="item-card">
                <h2>{props.name}</h2>
                <select onChange={priceHandler}>
                    <option value={0}>Price</option>
                    <option value={props.lowprice / 100}>{props.formatter.format(props.lowprice / 100)}</option>
                    <option value={props.highprice / 100}>{props.formatter.format(props.highprice / 100)}</option>
                </select>
            </div>
    );
}

export default Ex;