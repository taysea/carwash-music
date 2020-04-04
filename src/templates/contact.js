import React from 'react'
import { Anchor, Box, ResponsiveContext } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Contact | Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box align="center" justify="center" flex="grow">
            <Anchor
              size={size !== 'small' ? 'small' : 'xsmall'}
              label="mgmt@postcardboymusic.com"
              href="mailto:mgmt@postcardboymusic.com"
            />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
