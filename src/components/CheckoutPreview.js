import React, { useContext } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  ResponsiveContext,
  Text,
} from 'grommet'
import { StyledText } from '.'

export const CheckoutPreview = ({ subtotal, taxes, total }) => {
  const size = useContext(ResponsiveContext)

  return (
    <Box
      gap="small"
      width={
        size !== 'small' ? (size !== 'medium' ? 'medium' : 'small') : '100%'
      }
    >
      <Box pad="small" border={{ side: 'bottom', color: 'dark-3' }}>
        <Text margin="none" size="small" weight="bold">
          Order Summary
        </Text>
      </Box>
      <>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell scope="row">
                <StyledText size="xsmall">Subtotal</StyledText>
              </TableCell>
              <TableCell align="end">
                <StyledText size="xsmall">{subtotal}</StyledText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">
                <StyledText size="xsmall">Taxes</StyledText>
              </TableCell>
              <TableCell align="end">
                <StyledText size="xsmall">{taxes}</StyledText>
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
      </>
    </Box>
  )
}
