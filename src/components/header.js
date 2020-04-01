import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"



const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: orange;
  background-image: url('https://wgbh-static.s3.amazonaws.com/images/KeepItSocial_Pattern_BG_2.png');

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }

`

const HeaderLogo = styled.div`

`

const NavLinks = styled.div`
  text-decoration: none; 
  color: #3F4FD7;
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 1em;
`

export default () => (

  <Header>

    <HeaderLogo>
      <img src="https://wgbh-static.s3.amazonaws.com/Keep_It_Social_Site/KeepItSocial_LOGO_RBG_R.png" style={{height:`150px`, width: `150px`}}></img>
    </HeaderLogo>

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
  

  </Header>

)


/*
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// {siteTitle}
*/