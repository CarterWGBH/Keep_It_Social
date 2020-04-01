import React from "react"
import { Link } from "gatsby"

import InfoLayout from "../components/info-layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <InfoLayout>
    <SEO title="About" />
    <Link to="/page-2/">Go to page 2</Link>
  </InfoLayout>
)

export default IndexPage