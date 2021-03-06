/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import {FlexRow, BioContainer, BioContent} from "../styles/common"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, description } = data.site.siteMetadata
        return (
          <BioContainer>
              <Link to='/'>
                  <FlexRow>
                      <Image
                        fixed={data.avatar.childImageSharp.fixed}
                        alt={author}
                        style={{
                          marginRight: rhythm(1 / 2),
                          marginBottom: 0,
                          minWidth: 50,
                          borderRadius: `100%`,
                        }}
                        imgStyle={{
                          borderRadius: `50%`,
                        }}/>


                      <BioContent>
                          {author}
                          <small>

                           <strong>{description}</strong>
                          </small>
                      </BioContent>
                  </FlexRow>
              </Link>
         </BioContainer>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
