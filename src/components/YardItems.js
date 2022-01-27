import db from './firebase.config';
import React, { useState, useEffect } from 'react'

function YardItems() {
  const [yardItems, setYardItems] = useState([]);
  const fetchItems = async() => {
    const response = db.collection('items');
    const data = await response.get();
    data.docs.forEach(item => {
      setYardItems([...yardItems, item.data()])
    })
  }
  useEffect(() => {
    fetchItems();
  }, [])
  return (
    <div>
      <h1>THINGS!</h1>
      {
        yardItems && yardItems.map(item => {
          return (
            <div>
              <h4>{item.type}</h4>
              <h4>{item.name}</h4>
              <h4>{item.lowPrice}</h4>
              <h4>{item.highPrice}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default YardItems;