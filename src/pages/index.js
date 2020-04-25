import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Button, Text } from 'grommet'
import { PlayFill } from 'grommet-icons'
import favicon from '../images/favicon.ico'

const RootIndex = () => {
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
            round="small"
            direction="row"
            align="center"
            border={{ color: 'blue!', size: 'medium' }}
            gap="medium"
            pad="medium"
          >
            <PlayFill color="blue!" />
            <Text weight={900} color="blue!">
              listen now
            </Text>
          </Box>
        </Button>
      </Box>
    </Layout>
  )
}

export default RootIndex
