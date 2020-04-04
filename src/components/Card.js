import React from 'react'
import Img from 'gatsby-image'
import { Anchor, Box, Text } from 'grommet'

export const Card = ({ height, link, title, titleImage }) => {
  return (
    <Box gap="small" fill>
      <Anchor href={link} target="_blank" rel="noopener noreferrer">
        <Box width="100%" height={height || '250px'}>
          <Img
            fluid={titleImage}
            //   alt={titleImage.description}
            style={{ height: '100%' }}
          />
        </Box>
      </Anchor>
      <Anchor
        href={link}
        label={<Text size="small">{title}</Text>}
        target="_blank"
        rel="noopener noreferrer"
      />
    </Box>
  )
}
