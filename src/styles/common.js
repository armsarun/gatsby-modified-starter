import styled from "styled-components"

export const FlexRow = styled.div`
    display: flex;
`

export const LayoutBlogContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 45rem;
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
  margin-left: 15px;
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

export const SearchContainer = styled(FlexRow)`
  flex-direction: column;
  align-items:center;
  & button {
    width: 46%;
    margin-top: 20px;
    text-align: center;
    padding: 15px;
    background: blue;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    color:white;
    outline:none;
  }
  & input, input:active, input:focus, input:hover{
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: #666;
    outline:none;
}
`
