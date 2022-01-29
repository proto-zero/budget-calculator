import React, { useState } from "react";
import './Ex.css'

function Ex(props) {
    const [price, setPrice] = useState(0);

    function priceHandler(e) {
        let itemPrice = (e.target.value);
        setPrice(itemPrice);
        props.onGetPrice(price);
    }

    return (
        <div className="ex">
            <h3>{props.type}</h3>
            <h4>{props.name}</h4>

            <select onChange={priceHandler}>
                <option>Price</option>
                <option value={props.lowprice}>{props.lowprice}</option>
                <option on value={props.highprice}>{props.highprice}</option>
            </select>
        </div>
    );
}

export default Ex;