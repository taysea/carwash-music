import React from 'react'
import { Box } from 'grommet'
import { Checkout, CheckoutPreview, StyledText } from '.'

export const OrderSummary = ({ detailedCart, cartItems, ...rest }) => {
  return (
    <Box gap="small" {...rest}>
      <Box pad="small" border={{ side: 'bottom', color: 'dark-3' }}>
        <StyledText margin="none" size="small" weight="bold">
          Order Summary
        </StyledText>
      </Box>
      <CheckoutPreview cart={detailedCart} />
      <Checkout cart={cartItems} />
    </Box>
  )
}
