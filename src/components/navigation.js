import React, { useContext, useState } from 'react'
import {
  Anchor,
  Box,
  Button,
  Header,
  Heading,
  Layer,
  ResponsiveContext,
} from 'grommet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Close, Menu } from 'grommet-icons'
import { Footer } from '.'
const StyledGatsbyLink = styled(Link)`
  font-family: Lato;
  color: #3e5170;
  font-weight: bold;
  text-decoration: none;
`
const MobileNavLink = styled(Link)`
  font-family: Lato;
  color: white;
  font-weight: bold;
  text-decoration: none;
`

export default () => {
  const size = useContext(ResponsiveContext)
  const [showLayer, setShowLayer] = useState(false)

  return size !== 'small' ? (
    <Header
      justify="center"
      gap="large"
      pad={{ horizontal: 'medium', top: 'medium' }}
    >
      <StyledGatsbyLink to="/archive">archive</StyledGatsbyLink>
      <Anchor
        href="https://www.youtube.com/playlist?list=PLCVIa2sMYl9OYeQZNlvk8FmaqLtqVDYdj"
        target="_blank"
        rel="noopener noreferrer"
      >
        theatre
      </Anchor>
      <StyledGatsbyLink to="/">
        <Heading margin="none">postcard boy</Heading>
      </StyledGatsbyLink>
      <StyledGatsbyLink to="/press">press</StyledGatsbyLink>
      <StyledGatsbyLink to="/contact">contact</StyledGatsbyLink>
    </Header>
  ) : !showLayer ? (
    <Header pad="medium">
      <StyledGatsbyLink to="/">
        <Heading margin="none">postcard boy</Heading>
      </StyledGatsbyLink>
      <Button
        icon={<Menu color="blue!" />}
        onClick={() => setShowLayer(true)}
      />
    </Header>
  ) : (
    <Layer full animation>
      <Box fill background="blue!">
        <Header pad="medium">
          <MobileNavLink to="/">
            <Heading margin="none">postcard boy</Heading>
          </MobileNavLink>
          <Button icon={<Close />} onClick={() => setShowLayer(false)} />
        </Header>
        <Box
          pad={{ top: 'medium', horizontal: 'medium', bottom: 'xlarge' }}
          gap="large"
        >
          <MobileNavLink to="/archive">archive</MobileNavLink>
          <Anchor
            href="https://www.youtube.com/playlist?list=PLCVIa2sMYl9OYeQZNlvk8FmaqLtqVDYdj"
            target="_blank"
            rel="noopener noreferrer"
            color="white"
          >
            theatre
          </Anchor>
          <MobileNavLink to="/press">press</MobileNavLink>
          <MobileNavLink to="/contact">contact</MobileNavLink>
        </Box>
        <Footer isLanding />
      </Box>
    </Layer>
  )
}
