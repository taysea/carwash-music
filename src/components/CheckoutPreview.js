import React from 'react'
import { Table, TableBody, TableRow, TableCell } from 'grommet'
import { StyledText } from '.'
import { formatPrice } from '../utils'

const calculateTotal = cart => {
  let total = 0
  const currency = cart[0].currency
  cart.forEach(item => {
    total += item.price * item.quantity
  })

  return formatPrice(total, currency)
}

export const CheckoutPreview = ({ cart }) => {
  let total
  if (cart.length) total = calculateTotal(cart)
  else total = 'TBD'

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <StyledText size="xsmall">Subtotal</StyledText>
          </TableCell>
          <TableCell align="end">
            <StyledText size="xsmall">{total}</StyledText>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <StyledText size="xsmall">Shipping</StyledText>
          </TableCell>
          <TableCell align="end">
            <StyledText size="xsmall">TBD</StyledText>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <StyledText size="xsmall" weight="bold">
              Total
            </StyledText>
          </TableCell>
          <TableCell align="end">
            <StyledText size="xsmall" weight="bold">
              {total}
            </StyledText>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
