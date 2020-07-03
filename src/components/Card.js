import React, { useContext } from 'react'
import Img from 'gatsby-image'
import { Anchor, Box, ResponsiveContext, Text } from 'grommet'

export const Card = ({ height, link, title, titleImage }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box gap="small" fill>
      <Anchor href={link} target="_blank" rel="noopener noreferrer">
        <Box width="100%" height={height || '250px'}>
          <Img fluid={titleImage} style={{ height: '100%' }} />
        </Box>
      </Anchor>
      <Anchor
        href={link}
        label={
          <Text size={size !== 'small' ? 'small' : 'xsmall'} weight={900}>
            {title}
          </Text>
        }
        target="_blank"
        rel="noopener noreferrer"
      />
    </Box>
  )
}
