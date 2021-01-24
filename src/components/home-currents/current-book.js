import React from 'react';
import Currents from '../../data/Currents.json'

const currentBook = () => {
    return (
        <h3>{Currents[0].currentBook}</h3>
    )
};

export default currentBook;
