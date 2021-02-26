import React from 'react'
import { Anchor, Box, ResponsiveContext, Text } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Helmet title="Contact | Carwash Music">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box align="center" justify="center" flex="grow">
            <Anchor
              label={
                <Text
                  weight={900}
                  size={size !== 'small' ? 'small' : 'xsmall'}
                  color="#17355f"
                >
                  mgmt@postcardboymusic.com
                </Text>
              }
              href="mailto:mgmt@postcardboymusic.com"
            />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}
