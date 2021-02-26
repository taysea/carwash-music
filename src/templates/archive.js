import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import Gallery from 'react-photo-gallery'
import { Gallery } from '../components'
import { Box } from 'grommet'
import favicon from '../images/favicon.ico'

export default ({ location, data }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  return (
    <Layout location={location} height>
      <Helmet title="Archive | Carwash Music">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box pad={{ top: 'medium' }}>
        <Gallery
          images={data.allContentfulGalleryPhoto.edges.map(({ node }) => ({
            id: node.image.id,
            ...node.image.fluid,
            caption: `${node.title} – ${node.author}`,
            aspectRatio: node.image.resolutions.aspectRatio,
          }))}
          itemsPerRow={[2, 3]}
        />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulGalleryPhoto {
      edges {
        node {
          id
          image {
            file {
              url
            }
            resolutions {
              aspectRatio
              height
              width
            }
            fluid(quality: 70) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
