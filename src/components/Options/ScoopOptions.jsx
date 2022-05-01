import React from 'react';

const ScoopOptions = ({name, imagePath}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`}/>
        </div>
    )
}

export default ScoopOptions