import React from 'react';
import Currents from '../../data/Currents.json'

const currentGeeking = () => {
    return (
        <h3>{Currents[0].currentGeek}</h3>
    )
};

export default currentGeeking;
