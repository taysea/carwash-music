import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Button, Text } from 'grommet'
import { PlayFill } from 'grommet-icons'
import favicon from '../images/favicon.ico'

const RootIndex = () => {
  // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  // const [hover, setHover] = React.useState(false)
  return (
    <Layout location={'/'} isLanding>
      <Helmet title="Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box align="center" justify="center" flex>
        <Button
          href="https://fanlink.to/postcardboy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            direction="row"
            align="center"
            background="blue!"
            gap="medium"
            pad="medium"
          >
            <PlayFill />
            <Text weight="bold">listen now</Text>
          </Box>
        </Button>
      </Box>
    </Layout>
  )
}

export default RootIndex
