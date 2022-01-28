import React from "react";
import './Ex.css'

function Ex(props) {
    return (
        <div className="ex">
            <h3>{props.type}</h3>
            <h4>{props.name}</h4>
            <p>Low Price</p>
            <li>{props.lowprice}</li>
            <p>High Price</p>
            <li>{props.highprice}</li>
        </div>
    );
}

export default Ex;