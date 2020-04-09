import React from "react"
import styled from "styled-components"

export const FlexRow = styled.div`
display: flex;
`

export const FooterLinks = styled(FlexRow)`
     justify-content: space-evenly;
     & a{
        box-shadow: None;
        margin-left: 10px;
     }
`


export const BioContent= styled(FlexRow)`
  flex-direction: column;
`

export const BioContainer = styled(FlexRow)`
  margin-bottom: 20px;
  & a{
    box-shadow: None;
  }
`

export const BlogMeta = styled(FlexRow)`
  margin-bottom: 16px;
  margin-top: -9px;
  justify-content: space-between;
`
export const HeaderContainer = styled(FlexRow)`
  justify-content: space-between;
`

export const MenuContainer = styled(FlexRow)`
  & a{
    box-shadow: None;
    margin: 0px 10px 0px 10px;
  }
`
export const MainContainer = styled.div`
  padding: 30px
`

export const ArchiveContentContainer = styled(FlexRow)`

`
