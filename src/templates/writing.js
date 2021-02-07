import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from '../components/header/header'

export default function Template({
    data // this prop will be injected by the GraphQL query we'll write in a bit
  }) {
    const { markdownRemark: post } = data // data.markdownRemark holds your post data
    return (
        <>
        <Header />
      <div className="writing-container">
        <Helmet title={`Ben Ragsdale writing - ${post.frontmatter.title}`} />
        <div className="writing-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="writing-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      </>
    )
  }
  export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
  `