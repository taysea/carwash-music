import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Anchor, Box, Text } from 'grommet'

const StyledGatsbyLink = styled(Link)`
  font-family: Lato;
  color: #3e5170;
  font-weight: bold;
  text-decoration: none;
`

export const Card = ({ height, link, title, titleImage }) => {
  return (
    <Box gap="small" fill>
      <Anchor href={link} target="_blank">
        <Box width="100%" height={height || '250px'}>
          <Img
            fluid={titleImage}
            //   alt={titleImage.description}
            style={{ height: '100%' }}
          />
        </Box>
      </Anchor>
      <Anchor href={link} label={title} />
    </Box>
  )
}
