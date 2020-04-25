import React from 'react'
import { graphql } from 'gatsby'
import { Box, ResponsiveContext } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

export default ({ location, data }) => {
  return (
    <Layout location={location} height>
      <Helmet title="Theatre">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            align="center"
            justify="center"
            gap={size !== 'small' ? 'medium' : 'xlarge'}
            margin={{ top: 'large' }}
          >
            {data.allContentfulTheatre.edges.map(({ node }) => (
              <Box width="large" height={size !== 'small' ? '450px' : '250px'}>
                <iframe
                  width="100%"
                  height="100%"
                  src={node.url}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            ))}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allContentfulTheatre {
      edges {
        node {
          id
          url
        }
      }
    }
  }
`
