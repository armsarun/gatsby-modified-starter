import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import {HeaderContainer, MenuContainer} from "../styles/common"

class Header extends React.Component {
  render() {
    const menuItems = [
      { to:'/', title:'Home' },
      { to:'/search', title:'Search'},
      { to:'/archives', title:'Archives'}
    ]

    const menu = menuItems.map((item, index) =>
      <Link key={index} to={item.to}>{item.title}</Link>
    );

    return (
      <HeaderContainer>
          <Bio/>
          <MenuContainer>
            {menu}
          </MenuContainer>
      </HeaderContainer>
    )
  }
}
export default Header;
