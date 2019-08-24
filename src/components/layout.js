import React from 'react';
import { Link } from 'gatsby';
import {Global, css} from '@emotion/core'
import Helmet from 'react-helmet';
import Header from './header/header'

const Layout = ({ children }) => (
<>
<Global styles={css`
body {
    margin:0;
    padding:0;
main {
    display:grid;
    grid-template-columns: 50% 50%;

}

@media (max-width:700px) {
main{
    display:block;
}

main > section:first-of-type {
    display:none;
}
}

}
`}
/>
<Header />
<main>
{children}
</main>
</>
)

export default Layout;