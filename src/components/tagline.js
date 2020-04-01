import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Tagline = styled.div`
  font-size: 1em;
  text-align: center;
  background-color: #FF6330;
  padding: 2em 0em;
`
const TaglineText = styled.div`
    background-color: #C7D6D9;
    display: inline-block;
    h1 {
      margin-bottom: 0;
  }
  @media screen and (max-width: 1050px) {
    h1 {
        font-size: 1.5em;
    }
  }
`

export default () => (
    <Tagline>
    
        <TaglineText><h1>TAGLINE OR DESCRIPTIVE TEXT ABOUT KEEP IT SOCIAL</h1></TaglineText>
        
    </Tagline>
)