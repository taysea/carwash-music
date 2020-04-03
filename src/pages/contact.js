import React from 'react'
import { Anchor, Box } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Contact | Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
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
