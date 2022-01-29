import React, { useState } from "react";
import './Ex.css'

function Ex(props) {
    const [price, setPrice] = useState(0);          // State for individual item price

    function priceHandler(e) {                      
        const itemPrice = (e.currentTarget.value);  // Grabs the selected price
        setPrice(itemPrice);                        // Sets the state with that price
        props.onGetPrice(price);                    // Passes state up to outline
    }

    return (
        <div className="ex">
            <h3>{props.type}</h3>
            <h4>{props.name}</h4>

            <select onChange={priceHandler}>
                <option value="0">Price</option>
                <option value={props.lowprice}>{props.lowprice}</option>
                <option value={props.highprice}>{props.highprice}</option>
            </select>
        </div>
    );
}

export default Ex;