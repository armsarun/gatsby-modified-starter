import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {BlogMeta} from "../styles/common"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <hr/>
              <BlogMeta>
              <small>Created: <strong>{node.frontmatter.date}</strong></small>
              <small>Author: <strong>{node.frontmatter.author}</strong></small>
              <small>Category: <strong>{node.frontmatter.category}</strong></small>
              </BlogMeta>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.html || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            author
            category
          }
        }
      }
    }
  }
`
// frontmatter {
//   date
//   title
//   description
// }
  // date(formatString: "MMMM DD, YYYY")
  // <p
  //   dangerouslySetInnerHTML={{
  //     __html: node.frontmatter.description || node.excerpt,
  //   }}
  // />
