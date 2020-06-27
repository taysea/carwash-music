import React, { useContext } from 'react'
import { Box, Button, Text } from 'grommet'
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
      pad={{ top: 'medium' }}
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
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
          label="Checkout"
        />
      </Box>
    </Box>
  )
}

export default Cart
