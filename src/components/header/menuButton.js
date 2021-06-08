import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './menuList'
import SvgIcon from '@material-ui/core/SvgIcon';


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

    const openButtonStyles = {
        width:'49px',
        height:'49px',
        border: '1px solid red',
        cursor:'pointer',
        color: 'red',
        backgroundColor:'transparent',
        fontSize: '18px'
        }
  
    const closeButtonStyles = {
        position:'absolute',
        top: 5,
        right:5,
        fontSize:'2em',
        color: 'white',
        cursor:'pointer',
        backgroundColor:'#ff6961',
        zIndex:1,
        border: 'none',
        background: 'transparent'
    }


    //TODO-able to focus on close button for accessibility, put into TAB INDEX


    return(
        <>
       <button 
       style={openButtonStyles}
       onClick={toggleDrawer('left', true)}
       aria-label='Open menu'

       >
           ME<br />NU
       </button>
     <Drawer 
     open={state.left} 
     onClose={toggleDrawer('left', false)}
     >
       <button
       aria-label='Close menu'
       style={closeButtonStyles}
       onClick={toggleDrawer('left', false)}
       >
          <SvgIcon>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </SvgIcon>
        </button>
<MenuList />
       </Drawer>
       </>
    )
}
export default MenuButton;