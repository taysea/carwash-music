import React, { useState } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { ResponsiveContext } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Grid, Text } from 'grommet'
import favicon from '../images/favicon.ico'
import { StyledText } from '../components'
import ProductForm from '../components/ProductForm'

const InfoSection = ({ children, name }) => (
  <Box gap="small">
    <Box
      pad={{ vertical: 'small' }}
      border={{ side: 'bottom', color: 'light-5' }}
    >
      <StyledText size="small" weight="bold">
        {name}
      </StyledText>
    </Box>
    {children}
  </Box>
)

const RootIndex = ({ location, data }) => {
  const [selectedImage, setSelectedImage] = useState(
    data.shopifyProduct.images[0].localFile.childImageSharp.fluid
  )

  return (
    <Layout location={location} height>
      <Helmet title="Carwash">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            direction="row"
            gap="medium"
            pad={{ vertical: 'large', horizontal: 'small' }}
          >
            <Grid
              columns={size !== 'small' ? ['xsmall', '1/2', 'auto'] : '100%'}
              fill
              gap={size !== 'small' ? 'large' : 'medium'}
            >
              {size !== 'small' && (
                <Box gap="small">
                  {data.shopifyProduct.images.map(image => (
                    <Box
                      height="xsmall"
                      onClick={() =>
                        setSelectedImage(image.localFile.childImageSharp.fluid)
                      }
                    >
                      <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        alt={data.shopifyProduct.handle}
                        style={{ height: '100%' }}
                      />
                    </Box>
                  ))}
                </Box>
              )}
              <Box height={size !== 'small' ? '700px' : 'medium'}>
                <Img
                  fluid={selectedImage}
                  alt={data.shopifyProduct.handle}
                  style={{ height: '100%' }}
                />
              </Box>
              {size === 'small' && (
                <Box gap="small" direction="row">
                  {data.shopifyProduct.images.map(image => (
                    <Box
                      height="xsmall"
                      width="xsmall"
                      onClick={() =>
                        setSelectedImage(image.localFile.childImageSharp.fluid)
                      }
                    >
                      <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        alt={data.shopifyProduct.handle}
                      />
                    </Box>
                  ))}
                </Box>
              )}
              <Box gap="small">
                <Text weight="bold" size="large">
                  {data.shopifyProduct.title}
                </Text>
                <ProductForm product={data.shopifyProduct} />
                <InfoSection name="Details">
                  <StyledText size="xsmall">
                    {data.shopifyProduct.description}
                  </StyledText>
                </InfoSection>
                <InfoSection name="Shipping + Returns">
                  <StyledText size="xsmall">
                    We ship anywhere within the US and international.
                  </StyledText>
                  <StyledText size="xsmall">All sales are final.</StyledText>
                </InfoSection>
              </Box>
            </Grid>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    shopifyProduct(handle: { eq: "carwashhoodie" }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default RootIndex
