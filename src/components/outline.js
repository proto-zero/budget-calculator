import react from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// "items" collection interface
// Each document in the collection looks like this:
// interface Item {
// type: string;
// name: string;
// lowPrice: number;
// highPrice: number;
// }

const firebaseConfig = {
    apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
    authDomain: "yardzen-demo.firebaseapp.com",
    databaseURL: "https://yardzen-demo.firebaseio.com",
    projectId: "yardzen-demo",
    storageBucket: "yardzen-demo.appspot.com",
    messagingSenderId: "509183652730",
    appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getNames(db) {
    const nameCol = collection(db, 'items');
    const nameSnapshot = await getDocs(nameCol);
    const nameList = nameSnapshot.docs.map(doc => doc.data());
    return nameList;
}

function Outline() {
    return (
        <div>
            hello there
            {console.log(getNames(db))}
        </div>
    );
}

export default Outline;