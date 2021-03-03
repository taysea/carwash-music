import React, { useContext, useState } from 'react'
import {
  Anchor,
  Box,
  Button,
  Header,
  Image,
  Layer,
  ResponsiveContext,
  Stack,
} from 'grommet'
import reduce from 'lodash/reduce'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Cart, Close, Menu } from 'grommet-icons'
import { Footer } from '.'
import Div100vh from 'react-div-100vh'
import { StyledText } from './StyledText'
import StoreContext from '../context/StoreContext'
import Logo from '../assets/carwash-logo.png'

const StyledGatsbyLink = styled(Link)`
  color: #17355f;
  font-weight: 900;
  text-decoration: none;
`

const StyledLink = styled(Anchor)`
  color: #17355f;
  font-weight: 900;
  text-decoration: none;
`

const StyledMobileLink = styled(Anchor)`
  color: white;
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
      pad={{ horizontal: 'large', vertical: 'large' }}
    >
      <Link to="/">
        <Box width="225px">
          <Image src={Logo} fit="contain" />
        </Box>
      </Link>
      <Box direction="row" gap="medium" align="center">
        <StyledLink href="https://fanlink.to/carwash" target="_blank">
          music
        </StyledLink>
        {/* <StyledGatsbyLink to="/merch">merch</StyledGatsbyLink> */}
        {/* <StyledGatsbyLink to="/contact">contact</StyledGatsbyLink> */}
        <StyledGatsbyLink to="/cart">
          <Stack anchor="top-right">
            <Box pad="xsmall">
              <Cart size="medium" color="#17355f" />
            </Box>
            {hasItems ? (
              <Box
                background="#17355f"
                pad={{ horizontal: '8px', vertical: '4px' }}
                round
              >
                <StyledText size="10px">{quantity}</StyledText>
              </Box>
            ) : (
              undefined
            )}
          </Stack>
        </StyledGatsbyLink>
      </Box>
    </Header>
  ) : !showLayer ? (
    <Header pad="medium">
      <Link to="/">
        <Box width="small">
          <Image src={Logo} fit="contain" />
        </Box>
      </Link>
      <Button
        icon={<Menu color="#17355f" />}
        onClick={() => setShowLayer(true)}
      />
    </Header>
  ) : (
    <Layer full animation>
      <Div100vh>
        <Box fill background="#17355f">
          <Header pad="medium">
            <Box width="small">
              <Image src={Logo} fit="contain" />
            </Box>
            <Button
              icon={<Close color="white" />}
              onClick={() => setShowLayer(false)}
            />
          </Header>
          <Box
            pad={{ top: 'medium', horizontal: 'medium', bottom: 'xlarge' }}
            gap="large"
            flex
          >
            <StyledMobileLink href="https://fanlink.to/carwash" target="_blank">
              <AnchorBox>music</AnchorBox>
            </StyledMobileLink>
            {/* <MobileNavLink to="/press">
              <AnchorBox>press</AnchorBox>
            </MobileNavLink> */}
            {/* <MobileNavLink to="/merch">
              <AnchorBox>merch</AnchorBox>
            </MobileNavLink> */}
            {/* <MobileNavLink to="/contact">
              <AnchorBox>contact</AnchorBox>
            </MobileNavLink> */}
            <MobileNavLink to="/cart">
              <AnchorBox>cart</AnchorBox>
            </MobileNavLink>
          </Box>
          <Footer isLanding />
        </Box>
      </Div100vh>
    </Layer>
  )
}
