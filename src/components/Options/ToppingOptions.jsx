import React from 'react';

const ToppingOptions = ({name, imagePath}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`}/>
        </div>
    )
}

export default ToppingOptions