import React from 'react';
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet';
import Header from './header/Header'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Layout = ({ children }) => {

    const { title, description } = useSiteMetadata();

    return (
        <>
            <Global styles={css`
body {
    margin:0;
    padding:0;
main {
    margin-top: 100px;
    padding: 0 100px;
}


@media (max-width:700px) {
main {
    display:block;
}
main > section:first-of-type {
    display:none;
}
}

}
`}/>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;