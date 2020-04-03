import React from 'react'
import { Anchor, Box, Text } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Contact" />
      <Box align="center" justify="center" flex="grow">
        <Anchor
          size="medium"
          label="mgmt@postcardboymusic.com"
          href="mailto:mgmt@postcardboymusic.com"
        />
      </Box>
    </Layout>
  )
}
