import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'
import { ProductGrid } from '../components'

export default ({ location, data }) => {
  return (
    <Layout location={location} height>
      <Helmet title="Shop | Carwash Music">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ProductGrid data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          availableForSale
          description
          handle
          title
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            originalSrc
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants {
            id
            title
            availableForSale
            price
          }
        }
      }
    }
  }
`
