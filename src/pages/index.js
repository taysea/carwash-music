import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Text } from 'grommet'
import { Button as MaterialButton } from '@material-ui/core'
import { PlayFill } from 'grommet-icons'
import favicon from '../images/favicon.ico'

const RootIndex = () => {
  return (
    <Layout location={'/'} isLanding>
      <Helmet title="Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box align="center" justify="center" flex>
        <MaterialButton
          variant="outlined"
          startIcon={<PlayFill color="blue!" />}
          href="https://fanlink.to/postcardboy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '3px solid #3e5170',
            paddingLeft: '18px',
            paddingRight: '18px',
            paddingTop: '10px',
            paddingBottom: '10px',
            textTransform: 'lowercase',
            borderRadius: '6px',
          }}
        >
          <Text weight={900} color="blue!">
            listen now
          </Text>
        </MaterialButton>
      </Box>
    </Layout>
  )
}

export default RootIndex
