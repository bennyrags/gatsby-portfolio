import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'gatsby';

const MenuListItems = () => {
const listItemStyle = {
    textAlign:'center',
    fontSize: '1.5em',
    color:'#fff'
}

return (
<>
<ListItem style={listItemStyle}>
<Link to='/'>hello</Link>
</ListItem>
<ListItem style={listItemStyle}>
<Link to='/projects'>projects</Link>
</ListItem>
<ListItem style={listItemStyle}>
<Link to='/resume'>resume</Link>
</ListItem >
<ListItem style={listItemStyle}>
<Link to='/contact'>contact</Link>
</ListItem>
</>
)
}

export default MenuListItems;