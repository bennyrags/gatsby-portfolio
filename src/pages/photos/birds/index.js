import React from 'react';
import Layout from '../../../components/layout'
import { useStaticQuery, graphql } from "gatsby";

const imgStyles = {
    height: '70vh',
    width: 'auto',
    paddingRight: '20px'
}


const headerStyles = {
    fontFamily: 'helvetica, Arial, sans-serif',
    margin: '4px 0',
}

const BirdsPhotos = () => {
    const data = useStaticQuery(graphql`
           query BirdPhotos {
               allImagesJson(filter: {galleries: {name: {eq: "birds"}}}) {
                edges {
                  node {
                    id
                    alt
                    descr
                    path
                  }
                }
        }
    }`);
    const posts = data.allImagesJson.edges.map(img => 
        <img key={img.node.id} style={imgStyles} src={img.node.path} alt={img.node.alt} />
        
    );
    const sectionStyles = {
        display: 'grid',
        gridTemplateColumns:`repeat(${posts.length}, 1fr)`,
        overflow: 'scroll'
    }


    return (
        <Layout>
            <div style={{'display': 'grid', 'grid-template-columns': '25% 75%'}}>
                <div style={headerStyles}>
                    <h1>Birds</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <section style={sectionStyles}>
                    {posts}
                </section>
            </div>
        </Layout>
    )
}


export default BirdsPhotos;