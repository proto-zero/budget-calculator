import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import './TypeContainer.css';

function TypeContainer(props) {
    // State
    const [itemPrice, setItemPrice] = useState(0);      // The price of the selected item from ItemCard
    const [itemID, setItemID] = useState(-1);

    useEffect(() => {
        props.onGetPrice(itemPrice);
    }, [itemPrice]);

    // Functions
    function getPrice(itemCardState, id) {                   
        setItemPrice(itemCardState);                    // Sets itemPrice state
        setItemID(id);
    };

    // Variables
    var formatter = props.formatter;                    // Formats numbers as currency
    
    // JSX
    return (
        <div className={props.className}>
            <div className="type-container">
                <h3>{props.typeArray}</h3>
                <div className="card-container">
                    {props.itemList.map(item => {
                        if (item.type === props.typeArray) {
                            return (
                                <ItemCard 
                                    key={item.id}
                                    onGetPrice={getPrice}
                                    item={item} 
                                    selected={item.id === itemID}
                                    selectedValue={itemPrice}
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