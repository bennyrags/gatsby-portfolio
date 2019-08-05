import React from 'react';
import HomeButton from './homeButton';
import MenuButton from './menuButton';
import { Grid } from '@material-ui/core'
import { Link } from 'gatsby'
const Header = () => {
//TODO - make fixed without spacing issue
const headerStyles = {
    position: 'fixed',
    width: '98%',
    right: '1%',
    top: '1%'
}
return (
        <header style={headerStyles}>
        <Grid container justify='space-between'>
            <Grid item>
                <MenuButton />
            </Grid>
            <Grid item>
                <Link to='/'>
                <HomeButton
                />
                </Link>

            </Grid>
        </Grid>
        </header>
    )
}

export default Header
