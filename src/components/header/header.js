import React from 'react';
import HomeButton from './homeButton';
import MenuButton from './menuButton';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled'
import { Link } from 'gatsby';
const Header = () => {
//TODO - make fixed without spacing issue
const StyledHeader = styled.header`
    position: fixed;
    width: 98%;
    right: 1%;
    top: 1%;
`
return (
        <StyledHeader>
        <Grid container justify='space-between'>
            <Grid item>
                <MenuButton />
            </Grid>
            <Grid item>
                <Link to='/'>
                <HomeButton />
                </Link>

            </Grid>
        </Grid>
        </StyledHeader>
    )
}

export default Header
