import * as React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const About = () => {
  return (
    <Layout>
      <Seo title="about page" />
      <h1>About page</h1>
      <p>Welcome to about page</p>
      <Link to={"/"}>Go back to Home page</Link>
    </Layout>
  )
}

export default About


