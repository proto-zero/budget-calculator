import React, { useState } from "react";
import Ex from "./Ex";
import './TypeContainer.css';

function TypeContainer(props) {
    const [itemTotal, setItemTotal] = useState(0);

    function getPrice(exState) {
        setItemTotal(exState);
        props.onGetPrice(itemTotal);
    };
    
    var formatter = props.formatter;

    return (
        <div>
            
            <div className="type-container">
                {props.typeArray}
                <div className="card-container">
                    {props.itemList.map(item => {
                        if (item.type === props.typeArray) {
                            return (
                                <Ex 
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