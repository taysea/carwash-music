import React, { useContext } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Box, Grid, ResponsiveContext, Text } from 'grommet'
import StoreContext from '../context/StoreContext'

export const ProductGrid = ({ data }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'USD',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box pad={{ top: 'large', horizontal: 'small' }} align="center">
          <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
            {data.allShopifyProduct.edges.map(({ node }) => (
              <Link
                to={`/merch/${node.handle}`}
                style={{ textDecoration: 'none' }}
              >
                <Box gap="small">
                  <Box height="medium">
                    <Img
                      fluid={node.images[0].localFile.childImageSharp.fluid}
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
            ))}
          </Grid>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}
