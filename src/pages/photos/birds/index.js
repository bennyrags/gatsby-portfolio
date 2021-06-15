import React from 'react';
import Layout from '../../../components/layout'
import { useStaticQuery, graphql } from "gatsby";

const imgStyles = {
    height: '70vh',
    width: 'auto',
}

const sectionStyles = {
    display: 'inline-block',
    paddingRight: '40px',
}

const headerStyles = {
    textAlign: 'center',
    fontFamily: 'helvetica, Arial, sans-serif',
    margin: '4px 0'
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
    <div style={sectionStyles}>
        <img key={img.node.id} style={imgStyles} src={img.node.path} alt={img.node.alt} />
        <h4 style={headerStyles}>{img.node.descr} </h4>
    </div>
    );
    return (
        <Layout>
            <section>
                {posts}
            </section>
        </Layout>
    )
}


export default BirdsPhotos;