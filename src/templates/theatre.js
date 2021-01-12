import React, { useEffect, useRef, useState } from 'react'
import { Box, Grid, ResponsiveContext, Stack } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

export default ({ location, data }) => {
  const ref = useRef()
  const [height, setHeight] = useState('400px')

  useEffect(() => {
    const updateHeight = () => {
      if (ref && ref.current) {
        const dimensions = ref.current && ref.current.getBoundingClientRect()
        setHeight(`${dimensions.width * (9 / 16)}px`)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [ref, ref.current])
  // console.log(ref.current.getBoundingClientRect())

  return (
    <Layout location={location} height>
      <Helmet title="Theatre">
        <link rel="icon" href={favicon} />
      </Helmet>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            columns={size !== 'small' ? ['auto', 'auto'] : '100%'}
            rows="auto"
            gap="small"
            justify="center"
            fill
          >
            {data.allContentfulTheatre.edges.map(({ node }) => (
              <Box ref={ref} height={height} width="100%">
                <iframe
                  width="100%"
                  height="100%"
                  src={node.url}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            ))}
          </Grid>
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
