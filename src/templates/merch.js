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
      <Helmet title="Shop | Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ProductGrid data={data} />
      {/* <ResponsiveContext.Consumer>
        {size => (
          <Box pad={{ top: 'large' }}>
            <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
              {data.allShopifyProduct.edges.map(
                ({ node }) =>
                  node.availableForSale && (
                    <Link
                      to={`/merch/${node.handle}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Box gap="small">
                        <Box height="medium">
                          <Img
                            fluid={
                              node.images[0].localFile.childImageSharp.fluid
                            }
                            alt={node.handle}
                          />
                        </Box>
                        <Box>
                          <Text size="small" weight="bold" color="black">
                            {node.title}
                          </Text>
                          <Text size="small" color="black">
                            {getPrice(node.variants[0].price)}
                          </Text>
                        </Box>
                      </Box>
                    </Link>
                  )
              )}
            </Grid>
          </Box>
        )}
      </ResponsiveContext.Consumer> */}
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
