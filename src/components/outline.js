import React, { useState, useEffect } from "react";
import db from './firebase.config';
import { collection, getDocs } from 'firebase/firestore/lite';
import Ex from './Ex';
import TypeContainer from './TypeContainer';
import './outline.css';

async function getItems(db) {                                   // Access the items in the firebase api
    const itemCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemCol);
    const listOfItems = itemSnapshot.docs.map(doc => doc.data());
    return listOfItems;
}

function Outline(props) {
    // State
    const [itemList, setItemList] = useState([]);               // Api items in state
    const [itemTotal, setItemTotal] = useState(0);              // Remaining budget in state

    // Functions
    useEffect(async() => {                                      // Sets state for the itemList
        const list = await getItems(db);
        setItemList(list);
        }, [])

    function getPrice(exState) {                                // Sets state for the total price of items selected
        const totalPrice = parseInt(itemTotal) + parseInt(exState);
        setItemTotal(totalPrice);
    }

    // Variables
    const totalBudgetRemaining = parseInt(props.userBudgetValue) - parseInt(itemTotal);

    var formatter = props.formatter;                            // Formats numbers as currency

    // Adjusts the color of Total Budget Remaining depending on whether it is over or under budget
    const budgetColor = totalBudgetRemaining >= 0 ? 'under total-budget' : 'over total-budget';

    let typeArray = [];
    itemList.forEach(item => !typeArray.includes(item.type) ? typeArray.push(item.type) : null );
    
    // JSX
    return (
        <div className="outline">
            <h1 className={budgetColor}>
                Total Budget Remaining: {formatter.format(totalBudgetRemaining)}
            </h1>
            <h2>List of Items</h2>
            {/* <div className="item-container">
                {typeArray.map(typeOfItem => {return (
                <div>
                    {typeOfItem}
                    <div>
                    {itemList.map(item => { if (item.type === typeOfItem) {return (
                        <div className="item-list">
                            <Ex key={item.type} 
                            onGetPrice={getPrice} 
                            name={item.name}
                            lowprice={item.lowPrice} 
                            highprice={item.highPrice} 
                            formatter={formatter} />
                        </div>)}})}
                    </div>
                </div>)})}    
            </div> */}
            <div className="item-container">
                <TypeContainer
                    onGetPrice={getPrice}
                    typeArray={typeArray}
                    itemList={itemList} 
                    formatter={formatter} 
                />
            </div>
        </div>
    );
}

export default Outline;