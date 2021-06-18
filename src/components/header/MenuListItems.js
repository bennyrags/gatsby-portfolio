import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'gatsby';

const MenuListItems = () => {

    return (
        <>
            <ListItem>
                <Link to='/photos'>Photos</Link>
            </ListItem>
            <ListItem>
                <Link to='/resume'>Resume</Link>
            </ListItem >
            <ListItem>
                <Link to='/contact'>Contact</Link>
            </ListItem>
        </>
    )
}

export default MenuListItems;