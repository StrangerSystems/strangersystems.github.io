/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] },
        filter: { fields: { draft: { ne: true } } },
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path,
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const edges = result.data.allMarkdownRemark.edges
  for (const [index, { node }] of edges.entries()) {
    const previousNode = edges[index - 1]
    const nextNode = edges[index + 1]

    const previous = previousNode ? {
      path: previousNode.node.frontmatter.path,
      title: previousNode.node.frontmatter.title
    } : null

    const next = nextNode ? {
      path: nextNode.node.frontmatter.path,
      title: nextNode.node.frontmatter.title
    } : null

    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: { previous, next },
    })
  }
}
