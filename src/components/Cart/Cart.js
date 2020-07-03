import React, { useContext } from 'react'
import { Box, Text } from 'grommet'
import { Button } from '@material-ui/core'
import StoreContext from '../../context/StoreContext'
import { LineItem } from '.'
import { CheckoutPreview } from '..'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <Box
      pad={{ top: 'medium', horizontal: 'small' }}
      direction="row-responsive"
      justify="between"
      gap="large"
    >
      <Box gap="medium" flex>
        <Box pad="small" border={{ side: 'bottom', color: 'dark-3' }}>
          <Text margin="none" size="small" weight="bold">
            Your Cart
          </Text>
        </Box>
        {lineItems}
      </Box>
      <Box gap="small">
        <CheckoutPreview
          subtotal={checkout.subtotalPrice}
          taxes={checkout.totalTax}
          total={checkout.totalPrice}
        />
        <Button
          variant="contained"
          disableElevation
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  )
}

export default Cart
