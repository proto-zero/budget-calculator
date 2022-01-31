import React, { useState, useEffect } from "react";
import db from './firebase.config';
import { collection, getDocs } from 'firebase/firestore/lite';
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
    const [itemOne, setItemOne] = useState(0);
    const [itemTwo, setItemTwo] = useState(0);
    const [itemThree, setItemThree] = useState(0);
    const [itemFour, setItemFour] = useState(0);
    const [itemFive, setItemFive] = useState(0);
    const [itemSix, setItemSix] = useState(0);
    // const [itemTotal, setItemTotal] = useState(0);              // Remaining budget in state

    // Functions
    useEffect(async() => {                                      // Sets state for the itemList
        const list = await getItems(db);
        setItemList(list);
        }, [])

    // function getPrice(typeContainerState) {                     // Sets state for the total price of items selected
    //     const totalPrice = parseInt() + parseInt(typeContainerState);
    //     setItemTotal(totalPrice);
    // }

    function getPriceOne(price) {
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

    let itemTotal = parseInt(itemOne) + parseInt(itemTwo) + parseInt(itemThree) + parseInt(itemFour) + parseInt(itemFive) + parseInt(itemSix);

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
            {typeArray[5]}
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
                    
                {/* {typeArray.map(typeOfItem => {
                    return (
                        <TypeContainer
                            key={typeOfItem}
                            onGetPrice={getPrice}
                            typeArray={typeOfItem}
                            itemList={itemList} 
                            formatter={formatter} 
                        />
                    )
                })} */}
                
            </div>
        </div>
    );
}

export default Outline;