import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Box, Image, Text } from 'grommet'
import { formatPrice, string_to_slug } from '../../utils'
import { StyledText } from '..'
const StyledLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

const SkuCard = class extends React.Component {
  state = {
    disabled: false,
    buttonText: 'ADD TO CART',
    paymentMessage: '',
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'ADD ME BABY ONE MORE TIME!' })
  }

  addToCart(event, skuId, quantity = 1) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'ADDED...' })
    this.props.addToCart(skuId)
    setTimeout(this.resetButton.bind(this), 500)
  }

  render() {
    const sku = this.props.sku
    return (
      <StyledLink to={`/merch/${string_to_slug(sku.product.name)}`}>
        <Box gap="small">
          <Box height="medium">
            <Image src={sku.image} fit="cover" />
          </Box>
          <StyledText
            size="small"
            color="dark-1"
            style={{ fontWeight: 'bold' }}
          >
            {sku.product.name}
          </StyledText>
          <StyledText size="small" color="dark-1">
            {formatPrice(sku.price, sku.currency)}
          </StyledText>
        </Box>
      </StyledLink>
    )
  }
}

export default SkuCard
