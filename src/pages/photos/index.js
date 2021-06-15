import React from 'react';
import Layout from '../../components/layout'
import { useStaticQuery, graphql } from "gatsby";
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
    <div>
        <a href={`/photos/${img.node.galleries.name}`}>
            <img key={img.node.id} src={img.node.path} />
            <h4>{capitalize(`${img.node.galleries.name}`)}</h4>
        </a>
    </div>
    
);
    return (
        <Layout>
            {imgGalleries}
        </Layout>
    )
}
export default PhotosIndex; 
