import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from '../components/header/header'
import '../styles/writing.css'

//TODO - 2-7-21 - incorporate emotion here, to change stuff based on image, etc.
// -- change color of menu button depending on color of background img 
// - also, make background image stuff a11y

export default function Template({data}) {
    const { markdownRemark: post } = data // data.markdownRemark holds your post data

    return (
        <>
        <Helmet title={`Ben Ragsdale writing - ${post.frontmatter.title}`} />
        <Header />
      <div className="writingContainer">
        <main className="writingPost">
          <section className="writingHeader" style={{backgroundImage: 'url(' + `${post.frontmatter.heroImg}` + ')' }}>
          <h1>{post.frontmatter.title}</h1>
          </section>
          <section
            className="writingContent"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <section className="signature">
            BWR - {post.frontmatter.date}
          </section>
        </main>
      </div>
      </>
    )
  }
  export const pageQuery = graphql`
  query WritingPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        heroImg
        date
      }
    }
  }
  `