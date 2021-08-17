import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, url, category, image } = data.markdownRemark.frontmatter
  const img = getImage(image)

  return (
    <Layout>
      <Seo title={title} />
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage alt={title} image={img} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default SinglePost

export const query = graphql`
  query PostQuery($url: String) {
  markdownRemark(frontmatter: {url: {eq: $url}}) {
    html
    frontmatter {
      title
      url
      category
      image {
        childImageSharp {
          gatsbyImageData(width: 600)
        }
      }
    }
  }
}
`
