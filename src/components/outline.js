import React, { useState, useEffect } from "react";
import db from './firebase.config';
import { collection, getDocs } from 'firebase/firestore/lite';
import Ex from './Ex';
import './outline.css';

async function getItems(db) {                                   // Access the items in the firebase api
    const itemCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemCol);
    const listOfItems = itemSnapshot.docs.map(doc => doc.data());
    return listOfItems;
}

function Outline(props) {
    const [itemList, setItemList] = useState([]);               // Api items in state
    const [itemTotal, setItemTotal] = useState(0);  // Remaining budget in state

    useEffect(async() => {                                      // Sets state for the itemList
        const list = await getItems(db);
        setItemList(list);
      }, [])

      function getPrice(exState) {                              // Sets state for the total price of items selected
        const totalPrice = parseInt(itemTotal) + parseInt(exState);
        setItemTotal(totalPrice);
      }

    const totalBudgetRemaining = parseInt(props.userBudgetValue) - parseInt(itemTotal);

    var formatter = props.formatter;                            // Formats numbers as currency

    return (
        <div className="outline">
            {/* Total budget remaining: total price (passed up from Ex component) subtracted from the user budget (passed down through props from App) */}
            <h1>Total Budget Remaining: {formatter.format(totalBudgetRemaining)}</h1>
            <h2>List of Items</h2>
            <div className="item-container">
                {
                    itemList.map(item => {                      // .map iterates over the itemList array
                    return (
                        <div className="item-list">
                            {/* Pass the item attributes down to Ex component */}
                            <Ex key={item.type} 
                            onGetPrice={getPrice} 
                            type={item.type} 
                            name={item.name} 
                            lowprice={item.lowPrice} 
                            highprice={item.highPrice} 
                            formatter={formatter} />
                        </div>
                    )})
                }
            </div>
        </div>

    );
}

export default Outline;