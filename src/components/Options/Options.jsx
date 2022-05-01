import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';

const Options = () => {
    const [ items, setItems ] = useState([])
    const [ toppings, setToppings ] = useState([])

    useEffect(()=>{
        axios
          .get(`http://localhost:3030/scoops`)
          .then(response => setItems(response.data))
          .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        axios
          .get(`http://localhost:3030/toppings`)
          .then(response => setToppings(response.data))
          .catch(err => console.log(err))
    }, [])

    const scoopItems = items.map(item => (
        <ScoopOptions
            key={item.name} 
            name={item.name} 
            imagePath={item.imagePath}
        />))

    const toppingItems = toppings.map(topping => (
        <ToppingOptions
            key={topping.name}
            name={topping.name}
            imagePath={topping.imagePath}
        />))

    return (
        <div>
            {scoopItems}
            {toppingItems}
        </div>
    )
}

export default Options