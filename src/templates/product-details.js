import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Image, FormField, Select, ResponsiveContext } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Button, Grid, Text } from 'grommet'
import { Button as MaterialButton } from '@material-ui/core'
import favicon from '../images/favicon.ico'
import { formatPrice, addToStoredCart } from '../utils'
import { StyledText } from '../components'

const InfoSection = ({ children, name }) => (
  <Box gap="small">
    <Box
      pad={{ vertical: 'small' }}
      border={{ side: 'bottom', color: 'light-5' }}
    >
      <Text size="small" weight="bold">
        {name}
      </Text>
    </Box>
    {children}
  </Box>
)

export default ({ location, data }) => {
  const [cart, setCart] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [buttonText, setButtonText] = useState('Add to cart')
  const [selectedSku, setSelectedSku] = useState(
    data.allStripeSku.edges[0].node
  )
  const [featuredImage, setFeaturedImage] = useState(selectedSku.image)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      setCart(existingCart)
    }
  }, [location])

  const addToStoredCart = (newSku, quantity) => {
    let itemExisted = false
    let updatedCart = cart.map(item => {
      if (newSku === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: (quantity += quantity) }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newSku, quantity: quantity }]
    }
    setCart(updatedCart)
    // Store the cart in the localStorage.
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }

  const resetButton = () => {
    setDisabled(false)
    setButtonText('Add to cart')
  }

  const addToCart = (event, skuId, quantity = 1) => {
    event.preventDefault()
    addToStoredCart(skuId, quantity)
  }

  return (
    <Layout location={location} height>
      <Helmet
        title={`${data.allStripeSku.edges[0].node.product.name} | Postcard Boy`}
      >
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            pad={{
              top: 'large',
              horizontal:
                size === 'small' || size === 'medium' ? undefined : 'large',
            }}
          >
            <Box direction="row" gap="medium">
              <Box width="small">
                <Box height="small">
                  <Image src={selectedSku.image} fit="cover" />
                </Box>
              </Box>
              <Grid
                columns={{ count: size !== 'small' ? 2 : 1, size: 'auto' }}
                fill
                gap="large"
              >
                <Box height={size !== 'small' ? 'large' : 'medium'}>
                  <Image src={featuredImage} fit="cover" />
                </Box>
                <Box gap="small">
                  <Box gap="small">
                    <Box gap="xsmall">
                      <StyledText size="small" weight="bold">
                        {data.allStripeSku.edges[0].node.product.name}
                      </StyledText>
                      <StyledText size="small">
                        {formatPrice(selectedSku.price, selectedSku.currency)}
                      </StyledText>
                    </Box>
                    <Box gap="xsmall">
                      <StyledText size="xsmall">Size*</StyledText>
                      <Box direction="row" gap="xxsmall">
                        {data.allStripeSku.edges.map(({ node }) => (
                          <MaterialButton
                            onClick={() => setSelectedSku(node)}
                            variant={
                              selectedSku === node ? 'contained' : 'outlined'
                            }
                            disableElevation
                          >
                            {node.attributes.name}
                          </MaterialButton>
                        ))}
                      </Box>
                    </Box>
                    <Box width="xsmall">
                      <FormField label="Qty*">
                        <Select
                          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                          dropHeight="small"
                          value={quantity}
                          onChange={({ option }) => setQuantity(option)}
                        />
                      </FormField>
                    </Box>
                    <MaterialButton
                      variant="contained"
                      onClick={() => addToCart(event, selectedSku.id, quantity)}
                      disableElevation
                      style={{
                        background: '#3e5170',
                        color: '#FFF',
                        textTransform: 'capitalize',
                      }}
                    >
                      <StyledText size="small">{buttonText}</StyledText>
                    </MaterialButton>
                    {/* <Button
                      onClick={() => addToCart(event, selectedSku.id, quantity)}
                      disabled={disabled}
                      plain
                    >
                      <Box
                        pad="small"
                        align="center"
                        justify="center"
                        background="blue!"
                      >
                        <StyledText size="small">{buttonText}</StyledText>
                      </Box>
                    </Button> */}
                  </Box>
                  <InfoSection name="Details">
                    <StyledText size="xsmall">
                      {
                        data.allStripeSku.edges[0].node.product.metadata
                          .description
                      }
                    </StyledText>
                  </InfoSection>
                  <InfoSection name="Content + Care">
                    <StyledText size="xsmall">-100% cotton</StyledText>
                    <StyledText size="xsmall">-Screen-printed</StyledText>
                  </InfoSection>
                  <InfoSection name="Shipping + Returns">
                    <StyledText size="xsmall">
                      Item will ship within 2 weeks of purchase.
                    </StyledText>
                    <StyledText size="xsmall">All sales are final.</StyledText>
                  </InfoSection>
                </Box>
              </Grid>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogQuery($productId: String!) {
    allStripeSku(filter: { product: { id: { eq: $productId } } }) {
      edges {
        node {
          id
          price
          currency
          attributes {
            name
          }
          image
          product {
            metadata {
              description
            }
            name
          }
        }
      }
    }
  }
`
