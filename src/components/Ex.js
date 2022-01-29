import React, { useState } from "react";
import './Ex.css'

function Ex(props) {
    const [price, setPrice] = useState(0);          // State for individual item price

    function priceHandler(e) {                      
        const itemPrice = (e.currentTarget.value);  // Grabs the selected price
        setPrice(itemPrice);                        // Sets the state with that price
        props.onGetPrice(price);                    // Passes state up to outline
    }

    var formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="ex">
            <h3>{props.type}</h3>
            <h4>{props.name}</h4>

            <select onChange={priceHandler}>
                <option value="0">Price</option>
                <option value={props.lowprice}>{formatter.format(props.lowprice / 100)}</option>
                <option value={props.highprice}>{formatter.format(props.highprice / 100)}</option>
            </select>
        </div>
    );
}

export default Ex;