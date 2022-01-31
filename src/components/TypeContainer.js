import React, { useState } from "react";
import ItemCard from "./ItemCard";
import './TypeContainer.css';

function TypeContainer(props) {
    // State
    const [itemPrice, setItemPrice] = useState(0);      // The price of the selected item from ItemCard

    // Functions
    function getPrice(ItemCardState) {                   
        setItemPrice(ItemCardState);                    // Sets itemPrice state
        props.onGetPrice(itemPrice);                    // Lifts state to Balance
    };
    
    // Variables
    var formatter = props.formatter;                    // Formats numbers as currency

    // JSX
    return (
        <div>
            
            <div className="type-container">
                <h3>{props.typeArray}</h3>
                <div className="card-container">
                    {props.itemList.map(item => {
                        if (item.type === props.typeArray) {
                            return (
                                <ItemCard 
                                    key={Math.random()}
                                    onGetPrice={getPrice} 
                                    name={item.name}
                                    lowprice={item.lowPrice} 
                                    highprice={item.highPrice} 
                                    formatter={formatter} 
                                />
                            )
                        }
                    })}
                </div>
            </div>
                
        </div>
    );
}

export default TypeContainer;