import React from "react"
import WritingLink from "../../components/writing-link"
import Layout from '../../components/layout'

const WritingIndex = ({data: {
    allMarkdownRemark: {edges},
}, 
}) => {
    const Posts = edges.map(edge => <WritingLink key={edge.node.id} post={edge.node} />)
    return (
      <>
      <Layout >
          <h1>Writing</h1>
          {Posts}
      </Layout>
      </>
        )
}

export default WritingIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`