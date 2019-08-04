import React from 'react';
import Benny from '../../../public/static/me_100x100.jpg'
 const HomeButton = (props) => {

       const img = {
           width:'50px',
           height:'50px',
       }
   
    return (    
            <img style={img} src={Benny} alt='Ben Ragsdale headshot' />
    )
}

export default HomeButton