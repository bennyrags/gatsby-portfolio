import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './menuList'



const MenuButton = () => {
    const [state, setState] = React.useState({
    left: false,
      });
    
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

    const buttonStyles = {
        width:'49px',
        height:'49px',
        border: '1px solid grey',
       cursor:'pointer'
        }
    
    return(
        <>
       <button 
       style={buttonStyles}
       onClick={toggleDrawer('left', true)}
       >
           ME<br />NU
       </button>
     <Drawer 
     open={state.left} 
     onClose={toggleDrawer('left', false)}
     >
<MenuList />
       </Drawer>
       </>
    )
}
export default MenuButton;