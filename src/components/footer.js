import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
 display: flex;
  align-items: center;
  justify-content: space-around;
  color: orange;
  background-image: url('https://wgbh-static.s3.amazonaws.com/images/KeepItSocial_Pattern_BG_2.png');

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`

const NavLinks = styled.div`
  text-decoration: none; 
  color: #3F4FD7;
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 1em;
`

export default () => (
    <Footer>


<NavLinks><Link to="/" style={{
            color: `#16A0E8`,
            textDecoration: `none`,
          }}>WATCH</Link></NavLinks>
    <NavLinks><Link to="/about" style={{
            color: `#16A0E8`,
            textDecoration: `none`,
          }}>ABOUT THE SERIES</Link></NavLinks>
    <NavLinks><Link to="/info" style={{
            color: `#16A0E8`,
            textDecoration: `none`,
          }}>SOCIAL 101</Link></NavLinks>
  
    </Footer>
)