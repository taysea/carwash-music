import React, { useContext, useState } from 'react'
import {
  Anchor,
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
import { Cart, Close, Instagram, Menu } from 'grommet-icons'
import { Footer } from '.'
import Div100vh from 'react-div-100vh'
import { StyledText } from './StyledText'
import StoreContext from '../context/StoreContext'

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
      <StyledGatsbyLink to="/">
        <Text margin="none" weight={900} size="2.5em">
          carwash music
        </Text>
      </StyledGatsbyLink>
      <Box direction="row" gap="medium" align="center">
        <StyledLink href="https://fanlink.to/postcardboymusic" target="_blank">
          music
        </StyledLink>
        <StyledGatsbyLink to="/merch">merch</StyledGatsbyLink>
        <StyledGatsbyLink to="/contact">contact</StyledGatsbyLink>
        <Anchor href="https://www.instagram.com/from.garrett/">
          <Stack anchor="top-right">
            <Box pad="xsmall">
              <Instagram size="medium" color="#17355f" />
            </Box>
          </Stack>
        </Anchor>
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
      <StyledGatsbyLink to="/">
        <Text margin="none" weight={900} size="2em">
          carswash music
        </Text>
      </StyledGatsbyLink>
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
            <Text margin="none" weight={900} size="2em" color="white">
              carwash music
            </Text>
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
            <StyledMobileLink
              href="https://fanlink.to/postcardboymusic"
              target="_blank"
            >
              <AnchorBox>music</AnchorBox>
            </StyledMobileLink>
            {/* <MobileNavLink to="/press">
              <AnchorBox>press</AnchorBox>
            </MobileNavLink> */}
            <MobileNavLink to="/merch">
              <AnchorBox>merch</AnchorBox>
            </MobileNavLink>
            <MobileNavLink to="/contact">
              <AnchorBox>contact</AnchorBox>
            </MobileNavLink>
            <Anchor href="https://www.instagram.com/from.garrett/" color="#FFF">
              <AnchorBox>instagram</AnchorBox>
            </Anchor>
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
