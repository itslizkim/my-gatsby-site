import * as React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="ChouChou, a white holland lop bunny staring at the camera"
        src="../images/IMG_8422.jpg"
      />
    </Layout>
  )
}

export default IndexPage
