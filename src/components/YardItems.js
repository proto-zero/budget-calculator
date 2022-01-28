import db from './firebase.config';
import Ex from './Ex';
import React, { useState, useEffect } from 'react'

function YardItems() {
  // const [yardItems, setYardItems] = useState([]);

  // const fetchItems = async() => {
  //   const response = db.collection('items');
  //   const data = await response.get();
  //   data.docs.forEach(item => {
  //     setYardItems([...yardItems, item.data()])
  //   })
  // }

  // useEffect(() => {
  //   fetchItems();
  // }, [])

  return (
    <div>
      hello there
      {/* <h1>Available Items</h1>
      {
        yardItems && yardItems.map(item => {
          return (
            <div>
                <Ex key={item.id} type={item.type} name={item.name} lowprice={item.lowPrice} highprice={item.highPrice} />
            </div>
          )
        })
      } */}
    </div>
  );
}

export default YardItems;