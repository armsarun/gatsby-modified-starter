import React from "react"

import Header from "./header"
import { rhythm } from "../utils/typography"
import "../styles/with-lunr.css"
import {MainContainer, FooterLinks} from "../styles/common"

class Layout extends React.Component {
  render() {
    const { children } = this.props
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
              <a href="https://twitter.com/armsarun" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://github.com/armsarun/" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://www.linkedin.com/in/arunkumarpalanisamy/"target="_blank" rel="noopener noreferrer">Linkedin</a>
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
