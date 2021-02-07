const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const writingPostTemplate = path.resolve(`src/templates/writing.js`)

const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL writing query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: writingPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}
