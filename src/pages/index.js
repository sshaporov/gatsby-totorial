import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;

  console.log('nodes >>', nodes)

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div>
        {nodes.map((post) => {

          console.log('post >>', post)
          const { category, title, url, image } = post.frontmatter
          console.log('image >>', image)
          const img = getImage(image)
          console.log('img >>', img)

          return (
              <div key={post.id}>
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
