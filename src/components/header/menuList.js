import React from 'react';
import List from '@material-ui/core/List';
import MenuListItems from './MenuListItems'

const MenuList = () => {

    const drawerWidth = () => {
        if (window.innerWidth < 768) {
            return window.innerWidth;
        }
        return window.innerWidth / 2;
    }

    const listStyles = {
        width: drawerWidth(),
        display: 'flex',
        flexDirection: 'column',
        background: 'red',
        height: '100%',
        justifyContent: 'center',

        }

//TODO: LOOP THROUGH EXISTNG PAGES TO CREATE MENU ITEMS 
    return (
    <List style={listStyles}>
        
<MenuListItems />
</List> 
)

}

export default MenuList;

