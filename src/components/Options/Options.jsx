import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';
import Errors from '../Errors/Errors';

const Options = ({ optionType }) => {
    const [ items, setItems ] = useState([])
    const [ toppings, setToppings ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(()=>{
        axios
          .get(`http://localhost:3030/${optionType}`)
          .then(response => setItems(response.data))
          .catch(err => setError(true))
    }, [optionType]);

    if (error){
        return <Errors />
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

    const itemsList = items.map(item => (
        <ItemComponent
            key={item.name} 
            name={item.name} 
            imagePath={item.imagePath}
        />))

    return (
        <div>
            {itemsList}
        </div>
    )
}

export default Options