import React from 'react'
import { Box, Button } from 'grommet'
import { StyledText } from '.'

export const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_fh68cISJIGdpv2qALCqwYzRP00JyIN4T7L', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      billingAddressCollection: 'required',
      shippingAddressCollection: { allowedCountries: ['US', 'CA'] },
      successUrl: `${window.location.origin}/order-success`,
      cancelUrl: `${window.location.origin}/merch`,
    })

    if (error) {
      console.error('Error:', error)
    }
  }

  render() {
    return (
      <Button
        onClick={event => this.redirectToCheckout(event)}
        disabled={!this.props.cart.length}
      >
        <Box
          pad={{ horizontal: 'medium', vertical: 'small' }}
          align="center"
          justify="center"
          background="blue!"
        >
          <StyledText size="small">
            {this.props.cart.length ? 'Proceed to checkout' : 'Cart is empty'}
          </StyledText>
        </Box>
      </Button>
    )
  }
}
