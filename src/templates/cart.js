import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Button, Grid, Image } from 'grommet'
import { Button as MaterialButton, IconButton } from '@material-ui/core'
import { FormSubtract, FormAdd } from 'grommet-icons'
import favicon from '../images/favicon.ico'
import { getCart, setCart } from '../utils'
import { OrderSummary, StyledText } from '../components'
import { loadStripe } from '@stripe/stripe-js'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG')

const createCart = (cartItems, data) => {
  let visualCart = []
  cartItems.forEach((item, index) => {
    data.allStripeSku.edges.forEach(({ node }) => {
      if (node.id === item.sku) {
        node.quantity = item.quantity
        node.cartIndex = index
        visualCart.push(node)
      }
    })
  })

  return visualCart
}

export default ({ location, data }) => {
  const [cartItems, setCartItems] = useState(getCart())
  const cart = createCart(cartItems, data)
  const addToStoredCart = itemToAdd => {
    const updatedCart = cartItems.map(item => {
      if (itemToAdd.sku === item.sku) {
        return { sku: item.sku, quantity: (itemToAdd.quantity += 1) }
      } else {
        return item
      }
    })
    setCartItems(updatedCart)
    // Store the cart in the localStorage.
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }

  const removeFromStoredCart = itemToRemove => {
    let quantityZero
    const updatedCart = cartItems.map(item => {
      if (itemToRemove.sku === item.sku) {
        if (itemToRemove.quantity - 1 === 0) {
          quantityZero = true
        }
        return { sku: item.sku, quantity: itemToRemove.quantity - 1 }
      } else {
        return item
      }
    })

    if (quantityZero) {
      deleteItemFromCart(itemToRemove)
    } else {
      setCartItems(updatedCart)
      // Store the cart in the localStorage.
      localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
    }
  }

  const deleteItemFromCart = itemToDeleteId => {
    const filteredItems = cartItems.filter(
      item => item.sku !== itemToDeleteId.sku
    )
    setCartItems(filteredItems)
    setCart(filteredItems)
  }
  return (
    <Layout location={location}>
      <Helmet title="Your Cart | Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box
        pad={{ top: 'medium' }}
        direction="row-responsive"
        justify="between"
        gap="large"
      >
        <Box gap="medium" flex>
          <Box pad="small" border={{ side: 'bottom', color: 'dark-3' }}>
            <StyledText margin="none" size="small" weight="bold">
              Your Cart
            </StyledText>
          </Box>
          {cart.map(item => (
            <Grid columns={['xsmall', 'small', 'auto', 'flex']} gap="medium">
              <Box height="xsmall">
                <Image src={item.image} fit="cover" />
              </Box>
              <Box justify="center">
                <StyledText size="small">{item.product.name}</StyledText>
                <StyledText size="xsmall">
                  Size: {item.attributes.name}
                </StyledText>
              </Box>
              <Box direction="row" align="center" gap="xsmall">
                <Box pad="xsmall" round="full"></Box>
                <IconButton
                  onClick={() =>
                    removeFromStoredCart(cartItems[item.cartIndex])
                  }
                >
                  <FormSubtract />
                </IconButton>
                <StyledText>{item.quantity}</StyledText>

                <IconButton
                  onClick={
                    item.quantity < 10
                      ? () => addToStoredCart(cartItems[item.cartIndex])
                      : undefined
                  }
                >
                  <FormAdd color={item.quantity < 10 ? 'text' : '#CCC'} />
                </IconButton>
              </Box>
              <Button
                onClick={() => deleteItemFromCart(cartItems[item.cartIndex])}
                plain
              >
                <Box>
                  <StyledText
                    size="xsmall"
                    style={{ textDecoration: 'underline' }}
                  >
                    Remove
                  </StyledText>
                </Box>
              </Button>
            </Grid>
          ))}
        </Box>
        <OrderSummary
          cartItems={cartItems}
          detailedCart={cart}
          width="medium"
        />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allStripeSku {
      edges {
        node {
          id
          image
          currency
          price
          product {
            name
          }
          attributes {
            name
          }
        }
      }
    }
  }
`
