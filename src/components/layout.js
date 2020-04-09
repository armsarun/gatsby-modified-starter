import React from "react"
import { Link } from "gatsby"

import Header from "./header"
import { rhythm, scale } from "../utils/typography"
import "../styles/with-lunr.css"
import {MainContainer, FooterLinks} from "../styles/common"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // let header
    // header = (
    //   <h3
    //     style={{
    //       fontFamily: `Montserrat, sans-serif`,
    //       marginTop: 0,
    //     }}
    //   >
    //     <Link
    //       style={{
    //         boxShadow: `none`,
    //         textDecoration: `none`,
    //         color: `inherit`,
    //       }}
    //       to={`/`}
    //     >
    //       {title}
    //     </Link>
    //   </h3>
    // )

    return (
      <MainContainer>
          <Header/>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24)
            }}
            >
            <main>{children}</main>
            <footer>
              {/*© {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
              <FooterLinks>
              <small><strong>Follow me on</strong></small>
              <a href="https://twitter.com/armsarun" target="_blank">Twitter</a>
              <a href="https://github.com/armsarun/" target="_blank">Github</a>
              <a href="https://www.linkedin.com/in/arunkumarpalanisamy/"target="_blank">Linkedin</a>
              </FooterLinks>
            </footer>
            </div>
      </MainContainer>
    )
  }
}

export default Layout


// if (location.pathname === rootPath) {
//   header = (
//     <h1
//       style={{
//         ...scale(1.5),
//         marginBottom: rhythm(1.5),
//         marginTop: 0,
//       }}
//     >
//       <Link
//         style={{
//           boxShadow: `none`,
//           textDecoration: `none`,
//           color: `inherit`,
//         }}
//         to={`/`}
//       >
//         {title}
//       </Link>
//     </h1>
//   )
// }
