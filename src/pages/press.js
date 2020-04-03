import React, { useEffect } from 'react'
import { Anchor, Box, Grid, ResponsiveContext, Text } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Card } from '../components'

export default ({ location, data: { allContentfulPress } }) => {
  return (
    <Layout location={location}>
      <Helmet title="Press" />
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            columns={{ count: size !== 'small' ? 4 : 2, size: 'auto' }}
            gap="medium"
            justify="center"
            margin={{ top: 'large' }}
          >
            {allContentfulPress.edges.map(({ node }) => (
              <Card
                link={node.link}
                title={node.title}
                titleImage={node.titleImage.fluid}
                key={node.id}
                height={size === 'small' && 'small'}
              />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPress {
      edges {
        node {
          id
          title
          titleImage {
            id
            fluid(quality: 50) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          link
        }
      }
    }
  }
`
