import React from 'react';
import Benny from '../../../public/static/me.jpg'
 const HomeButton = (props) => {

       const img = {
           width:'50px',
           height:'50px',
       }
       const btn = {
           background: 'transparent',
           border: 'none'
       }
   
    return (
            <button style={btn}>    
            <img style={img} src={Benny} alt='Ben Ragsdale headshot' />
            </button>
    )
}

export default HomeButton