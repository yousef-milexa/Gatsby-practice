import React from "react"
import Listing from "../components/listing"

import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <h1>Home page</h1>
    <Link to="/page-2/">Blog Page</Link>
  </Layout>
)

export default IndexPage
