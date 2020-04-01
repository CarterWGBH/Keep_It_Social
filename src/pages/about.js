import React from "react"
import { Link } from "gatsby"

import AboutLayout from "../components/about-layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <AboutLayout>
    <SEO title="About" />
    <Link to="/page-2/">Go to page 2</Link>
  </AboutLayout>
)

export default IndexPage