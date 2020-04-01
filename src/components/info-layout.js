/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Video from "./video-headline"
import Tagline from "./tagline"
import "./layout.css"
import tagline from "./tagline"
import VideoWrapper from "./video-headline"
import PromoLight from "./promo-text-light"
import ContactForm from "./contact-form"
import PromoDark from "./promo-text-dark"
import Hosts from "./hosts"
import Sponsors from "./sponsors"
import Footer from "./footer"



const AboutLayout = ({ children }) => {

  return (
    <div>
      <Header></Header>
      <Tagline></Tagline>
      <PromoDark></PromoDark>
  
      <ContactForm></ContactForm>
      <Sponsors></Sponsors>


      <Footer></Footer>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
       
        <main>{children}</main>
        <footer>
       
        </footer>
      </div>
    </div>
  )
}

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AboutLayout
