import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>

      <div className="posts">
        {nodes.map((post) => {
          const { category, title, url, image } = post.frontmatter
          const img = getImage(image)
          
          return (
              <div key={post.id} className="post">
                <GatsbyImage alt={title} image={img} />
                <Link to={`/${category}/${url}`}>{title}</Link>
              </div>
            )
        })}
      </div>
    </Layout>
)}

export default IndexPage

export const query = graphql`
  query mainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          url
          title
          category
          image {
            childImageSharp {
             gatsbyImageData(width: 200, formats: [AUTO, AVIF], placeholder: BLURRED)
           }
         }
        }
        id
      }
    }
  }
`
