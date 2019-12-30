import React from 'react'
import { Anchor, Box, Text } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Contact" />
      <Box align="center" justify="center">
        <Box>
          <Text>management contact:</Text>
          <Anchor label="mgmt@postcardboymusic.com" />
        </Box>
      </Box>
    </Layout>
  )
}
