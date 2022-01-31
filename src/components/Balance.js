import React, { useState, useEffect } from "react";
import db from './firebase.config';
import { collection, getDocs } from 'firebase/firestore/lite';
import TypeContainer from './TypeContainer';
import './Balance.css';

async function getItems(db) {                                   // Access the items in the firebase api
    const itemCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemCol);
    const listOfItems = itemSnapshot.docs.map(doc => doc.data());
    return listOfItems;
}

function Outline(props) {
    // State
    const [itemList, setItemList] = useState([]);               // Api items in state

    const [itemOne, setItemOne] = useState(0);                  // States for the individual TypeContainers
    const [itemTwo, setItemTwo] = useState(0);
    const [itemThree, setItemThree] = useState(0);
    const [itemFour, setItemFour] = useState(0);
    const [itemFive, setItemFive] = useState(0);
    const [itemSix, setItemSix] = useState(0);

    // Functions
    useEffect(async() => {                                      // Sets state for the itemList
        const list = await getItems(db);
        setItemList(list);
        }, [])

    function getPriceOne(price) {                               // Sets state for each TypeComponent price 
        setItemOne(price);
    };

    function getPriceTwo(price) {
        setItemTwo(price);
    };

    function getPriceThree(price) {
        setItemThree(price);
    };

    function getPriceFour(price) {
        setItemFour(price);
    };

    function getPriceFive(price) {
        setItemFive(price);
    };

    function getPriceSix(price) {
        setItemSix(price);
    };

    // Variables
        // Total price of each TypeComponent price
    let totalPrice = parseInt(itemOne) + parseInt(itemTwo) + parseInt(itemThree) + parseInt(itemFour) + parseInt(itemFive) + parseInt(itemSix);

        // Remaining Budget subtracting totalPrice from user budget
    const totalBudgetRemaining = parseInt(props.userBudgetValue) - parseInt(totalPrice);

        // Formats numbers as currency
    var formatter = props.formatter;                            

        // Adjusts the backgroundcolor of Total Budget Remaining depending on whether it is over or under budget
    const budgetColor = totalBudgetRemaining >= 0 ? 'under total-budget' : 'over total-budget';

        // An array with one of each item type
    let typeArray = [];
    itemList.forEach(item => !typeArray.includes(item.type) ? typeArray.push(item.type) : null );
    
    // JSX
    return (
        <div className="balance">
            <h1 className={budgetColor}>
                Total Budget Remaining: {formatter.format(totalBudgetRemaining)}
            </h1>
            <h2>List of Items</h2>
            <div className="item-container">
                <TypeContainer
                    onGetPrice={getPriceOne}
                    typeArray={typeArray[0]}
                    itemList={itemList} 
                    formatter={formatter} 
                />
                <TypeContainer
                    onGetPrice={getPriceTwo}
                    typeArray={typeArray[1]}
                    itemList={itemList} 
                    formatter={formatter} 
                />
                <TypeContainer
                    onGetPrice={getPriceThree}
                    typeArray={typeArray[2]}
                    itemList={itemList} 
                    formatter={formatter} 
                />
                <TypeContainer
                    onGetPrice={getPriceFour}
                    typeArray={typeArray[3]}
                    itemList={itemList} 
                    formatter={formatter} 
                />
                <TypeContainer
                    onGetPrice={getPriceFive}
                    typeArray={typeArray[4]}
                    itemList={itemList} 
                    formatter={formatter} 
                />
                <TypeContainer
                    onGetPrice={getPriceSix}
                    typeArray={typeArray[5]}
                    itemList={itemList} 
                    formatter={formatter} 
                />
            </div>
        </div>
    );
}

export default Outline;