import React from "react"
import Listing from "../components/listing"

import Layout from "../components/layout"

const SecondPage = ({location}) => (
  <Layout location={location}>
    <Listing />
  </Layout>
)

export default SecondPage
