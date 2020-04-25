import React, { useContext, useState } from 'react'
import {
  Box,
  Button,
  Header,
  Heading,
  Layer,
  ResponsiveContext,
  Text,
} from 'grommet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Close, Menu } from 'grommet-icons'
import { Footer } from '.'
import Div100vh from 'react-div-100vh'

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
      <StyledGatsbyLink to="/theatre">theatre</StyledGatsbyLink>

      <StyledGatsbyLink to="/">
        <Text margin="none" weight={900} size="2.5em">
          postcard boy
        </Text>
      </StyledGatsbyLink>
      <StyledGatsbyLink to="/press">press</StyledGatsbyLink>
      <StyledGatsbyLink to="/contact">contact</StyledGatsbyLink>
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
            <MobileNavLink to="/press">
              <AnchorBox>press</AnchorBox>
            </MobileNavLink>
            <MobileNavLink to="/contact">
              <AnchorBox>contact</AnchorBox>
            </MobileNavLink>
          </Box>
          <Footer isLanding />
        </Box>
      </Div100vh>
    </Layer>
  )
}
