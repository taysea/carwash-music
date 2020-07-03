import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Grid, Box, Image, ResponsiveContext } from 'grommet'
import { Button } from '@material-ui/core'
import { StyledText } from '..'
import StoreContext from '../../context/StoreContext'

export const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const size = useContext(ResponsiveContext)
  const variantImage = item.variant.image ? (
    <Image
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      fit="cover"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <>
      <Grid columns={['xsmall', 'small', 'auto', 'flex']} gap="medium">
        <Link to={`/merch/${item.variant.product.handle}/`}>
          <Box height="xsmall">{variantImage}</Box>
        </Link>
        <Box justify="center">
          <StyledText size="small" weight="bold">
            {item.title}
          </StyledText>
          <StyledText size="small">{selectedOptions}</StyledText>
        </Box>
        {size !== 'small' && (
          <Box direction="row" align="center" gap="xsmall">
            <StyledText size="small">Qty: {item.quantity}</StyledText>
          </Box>
        )}
        <Box justify="center" align="start">
          <Button variant="outlined" disableElevation onClick={handleRemove}>
            Remove
          </Button>
        </Box>
      </Grid>
    </>
  )
}
