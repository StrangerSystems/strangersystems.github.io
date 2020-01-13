import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title="Home" />

      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <div>
        {previous && <Link to={previous.path}>{previous.title}</Link>}
      </div>

      <div>
        {next && <Link to={next.path}>{next.title}</Link>}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }, fields: { draft: { ne: true } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
