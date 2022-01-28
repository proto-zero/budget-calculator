import react, { useState, useEffect } from "react";
import db from './firebase.config';
// import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Ex from './Ex';


// "items" collection interface
// Each document in the collection looks like this:
// interface Item {
// type: string;
// name: string;
// lowPrice: number;
// highPrice: number;
// }

// const firebaseConfig = {
//     apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
//     authDomain: "yardzen-demo.firebaseapp.com",
//     databaseURL: "https://yardzen-demo.firebaseio.com",
//     projectId: "yardzen-demo",
//     storageBucket: "yardzen-demo.appspot.com",
//     messagingSenderId: "509183652730",
//     appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

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
        <div className="main">
            List of Items
            {
                List.map(item => {
                return (
                    <div>
                        <Ex key={item.id} type={item.type} name={item.name} lowprice={item.lowPrice} highprice={item.highPrice} />
                    </div>
                )})
            }
        </div>

    );
}

export default Outline;

// organize list in order of type