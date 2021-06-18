import React from 'react';
import Layout from '../../components/layout'
import { useStaticQuery, graphql } from "gatsby";

const galleriesStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
}

const capitalize = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const PhotosIndex = () => {
const data = useStaticQuery(graphql`
    query AllPhotos {
        allImagesJson(filter: {galleries: {featured: {eq: true}}}) {
            edges {
                node {
                    id
                    alt
                    descr
                    path
                    galleries {
                        name
                      }
                }
            }
        }
    }`);
const imgGalleries = data.allImagesJson.edges.map(img => 
    <div key={`galleryDiv` + img.node.id} > 
        <a href={`/photos/${img.node.galleries.name}`} style={{"display": "block"}}>
            <img key={img.node.id} src={img.node.path} style={{"width": "100%"}}/>
            <h4 style={{"width": "100%", "margin-top": "4px"}}>{capitalize(`${img.node.galleries.name}`)}</h4>
        </a>
    </div>
    
);
    return (
        <Layout className="hello">
            <h1>Photo Galleries</h1>
            <section style={galleriesStyles}>
            {imgGalleries}
            </section>
        </Layout>
    )
}
export default PhotosIndex; 
