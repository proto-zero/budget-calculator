import React, { useState, useEffect } from "react";
import db from './firebase.config';
import { collection, getDocs } from 'firebase/firestore/lite';
import Ex from './Ex';
import './outline.css';

async function getNames(db) {
    const nameCol = collection(db, 'items');
    const nameSnapshot = await getDocs(nameCol);
    const nameList = nameSnapshot.docs.map(doc => doc.data());
    return nameList;
}

function Outline() {
    const [List, setList] = useState([]);

    useEffect(async() => {
        const list = await getNames(db); //getUngrouped()
        setList(list);
      }, [])

    return (
        <div className="outline">
            <h2>List of Items</h2>
            <div className="item-container">
                {
                    List.map(item => {
                    return (
                        <div className="item-list">
                            <Ex key={item.id} type={item.type} name={item.name} lowprice={item.lowPrice} highprice={item.highPrice} />
                        </div>
                    )})
                }
            </div>
        </div>

    );
}

export default Outline;

// organize list in order of type