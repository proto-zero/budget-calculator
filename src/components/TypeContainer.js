import React, { useState } from "react";
import Ex from "./Ex";
import './TypeContainer.css';

function TypeContainer(props) {
    const [itemTotal, setItemTotal] = useState(0);

    function getPrice(exState) {                                // Sets state for the total price of items selected
        setItemTotal(exState);
    };
    
    var formatter = props.formatter;

    return (
        <div>
            {props.typeArray.map(typeOfItem => {
                return (
                    <div className="type-container">
                        {itemTotal}
                        {typeOfItem}
                        <div className="card-container">
                            {props.itemList.map(item => {
                                if (item.type === typeOfItem) {
                                    return (
                                        <Ex 
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
                )
            })}
        </div>
    );
}

export default TypeContainer;