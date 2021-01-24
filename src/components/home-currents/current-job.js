import React from 'react';
import Currents from '../../data/Currents.json'
const currentJob= () => {

    return (
        <h3>{Currents[0].currentJob}</h3>
    )
};

export default currentJob;
