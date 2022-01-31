import React, { useState, useEffect } from "react";
import './ItemCard.css'

function Ex(props) {
    // State
    const [price, setPrice] = useState(0);          // State for individual item price

    useEffect(() => {
        props.onGetPrice(price, props.item.id);
    }, [price]);

    // Functions
    function priceHandler(e) {
        const itemPrice = (e.currentTarget.value);  // Grabs the selected price
        setPrice(itemPrice);                        // Sets the state with that price
    };

    // JSX
    return (
            <div className="item-card">
                <h2>{props.item.name}</h2>
                <select onChange={priceHandler}>
                    <option selected={!props.selected} value={0}>Price</option>
                    <option selected={props.selected && props.selectedValue === (props.item.lowPrice / 100)} value={props.item.lowPrice / 100}>{props.formatter.format(props.item.lowPrice / 100)}</option>
                    <option selected={props.selected && props.selectedValue === (props.item.highPrice / 100)} value={props.item.highPrice / 100}>{props.formatter.format(props.item.highPrice / 100)}</option>
                </select>
            </div>
    );
}

export default Ex;