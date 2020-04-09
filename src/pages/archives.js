import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import {ArchiveContentContainer} from "../styles/common"

class Archives extends React.Component {

  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    // seprate posts base on category
    const distinctPost = {};
    posts.forEach(edge => {
      const {
        node: {
          frontmatter: { category }
        }
      } = edge;

      if (category && category != null) {
        if (!distinctPost[category]) {
          distinctPost[category] = [];
        }
        distinctPost[category].push(edge);
      }
    });

    const postList = Object.entries(distinctPost)

    return (
      <Layout location={this.props.location}>
        {postList.map(item =>(
          <section key={item[0]}>
              <h2>
                {item[0]}
              </h2>
              {item[1].map(({node}, index)=>{
                  const title = node.frontmatter.title || node.field.slug
                  return (
                    <React.Fragment>
                        <ArchiveContentContainer>
                        <span>{index + 1} &nbsp;&nbsp;</span>
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                        </Link>
                        </ArchiveContentContainer>
                        <hr/>
                    </React.Fragment>
                    )
              })}
          </section>
        ))}
      </Layout>
    )
  }
}

export default Archives

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
          title
          category
          author
        }
      }
    }
  }
}
`
