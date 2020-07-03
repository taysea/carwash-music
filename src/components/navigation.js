import React, { useContext, useState } from 'react'
import {
  Box,
  Button,
  Header,
  Layer,
  ResponsiveContext,
  Stack,
  Text,
} from 'grommet'
import reduce from 'lodash/reduce'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Cart, Close, Menu } from 'grommet-icons'
import { Footer } from '.'
import Div100vh from 'react-div-100vh'
import { StyledText } from './StyledText'
import StoreContext from '../context/StoreContext'

const StyledGatsbyLink = styled(Link)`
  color: #3e5170;
  font-weight: 900;
  text-decoration: none;
`
const MobileNavLink = styled(Link)`
  color: white;
  font-weight: 900;
  text-decoration: none;
`
const AnchorBox = ({ ...rest }) => <Box pad={{ vertical: 'small' }} {...rest} />

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

export default () => {
  const size = useContext(ResponsiveContext)
  const [showLayer, setShowLayer] = useState(false)
  const [hasItems, quantity] = useQuantity()

  return size !== 'small' ? (
    <Header
      justify="between"
      gap="large"
      pad={{ horizontal: 'medium', top: 'medium' }}
    >
      <StyledGatsbyLink to="/">
        <Text margin="none" weight={900} size="2.5em">
          postcard boy
        </Text>
      </StyledGatsbyLink>
      <Box direction="row" gap="large">
        <StyledGatsbyLink to="/archive">archive</StyledGatsbyLink>
        <StyledGatsbyLink to="/theatre">theatre</StyledGatsbyLink>
        {/* <StyledGatsbyLink to="/press">press</StyledGatsbyLink> */}

        <StyledGatsbyLink to="/contact">contact</StyledGatsbyLink>
      </Box>
      {/* <StyledGatsbyLink to="/merch">merch</StyledGatsbyLink> */}
      {/* <StyledGatsbyLink to="/cart">
        <Stack anchor="top-right">
          <Box pad="xsmall">
            <Cart size="medium" color="blue!" />
          </Box>
          {hasItems ? (
            <Box
              background="blue!"
              pad={{ horizontal: '8px', vertical: '4px' }}
              round
            >
              <StyledText size="10px">{quantity}</StyledText>
            </Box>
          ) : (
            undefined
          )}
        </Stack>
      </StyledGatsbyLink> */}
    </Header>
  ) : !showLayer ? (
    <Header pad="medium">
      <StyledGatsbyLink to="/">
        <Text margin="none" weight={900} size="2em">
          postcard boy
        </Text>
      </StyledGatsbyLink>
      <Button
        icon={<Menu color="blue!" />}
        onClick={() => setShowLayer(true)}
      />
    </Header>
  ) : (
    <Layer full animation>
      <Div100vh>
        <Box fill background="blue!">
          <Header pad="medium">
            <Text margin="none" weight={900} size="2em">
              postcard boy
            </Text>
            <Button icon={<Close />} onClick={() => setShowLayer(false)} />
          </Header>
          <Box
            pad={{ top: 'medium', horizontal: 'medium', bottom: 'xlarge' }}
            gap="large"
            flex
          >
            <MobileNavLink to="/archive">
              <AnchorBox>archive</AnchorBox>
            </MobileNavLink>
            <MobileNavLink to="/theatre">
              <AnchorBox>theatre</AnchorBox>
            </MobileNavLink>
            {/* <MobileNavLink to="/press">
              <AnchorBox>press</AnchorBox>
            </MobileNavLink> */}
            <MobileNavLink to="/contact">
              <AnchorBox>contact</AnchorBox>
            </MobileNavLink>
            {/* <MobileNavLink to="/merch">
              <AnchorBox>merch</AnchorBox>
            </MobileNavLink> */}
            {/* <MobileNavLink to="/cart">
              <AnchorBox>your cart</AnchorBox>
            </MobileNavLink> */}
          </Box>
          <Footer isLanding />
        </Box>
      </Div100vh>
    </Layer>
  )
}
