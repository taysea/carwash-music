import React from 'react'
import { Anchor, Header, Heading } from 'grommet'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledGatsbyLink = styled(Link)`
  font-family: Lato;
  color: #3e5170;
  font-weight: bold;
  text-decoration: none;
`
export default () => (
  <Header
    justify="center"
    gap="xlarge"
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
)
