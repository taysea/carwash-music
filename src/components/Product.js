import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Button, Text } from 'grommet'

export const Product = ({ node }) => {
  return (
    <Box gap="small" width="medium">
      <Box width="100%">
        <Img fluid={node.images[0].fluid} style={{ height: '100%' }} />
      </Box>
      <Link to={`/merch/${node.slug}`}>
        <Text>{node.name}</Text>
      </Link>
      <Text size="small">{node.description}</Text>
      <Text>${node.price}</Text>
    </Box>
  )
}
