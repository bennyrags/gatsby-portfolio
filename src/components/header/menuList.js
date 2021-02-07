import React from 'react';
import List from '@material-ui/core/List';
import MenuListItems from './MenuListItems'
import { makeStyles } from '@material-ui/core/styles'


const drawerWidth = () => {
    //was getting window not defined error had to add this if undefined statement
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
            return window.innerWidth;
        }
        return window.innerWidth / 2;
    }
    else {
        return '100%';
    }
}

const newListStyles = makeStyles({
    root: {
        width: drawerWidth(),
        display: 'flex',
        flexDirection: 'column',
        background: '#ff6961',
        height: '100%',
        justifyContent: 'space-around',

        '& li': {
            fontSize: '1.5em',
            display: 'block',

            '& a': {
                color: '#fff',
                display: 'block',
                textAlign: 'center'
            }
        }

    }

})

const MenuList = () => {

    const classes = newListStyles();

    //TODO: LOOP THROUGH EXISTNG PAGES TO CREATE MENU ITEMS 
    return (
        <List className={classes.root}>
            <MenuListItems />
        </List>

    )

}

export default MenuList;

