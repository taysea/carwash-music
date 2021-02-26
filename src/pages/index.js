import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Box, Image } from 'grommet'
import favicon from '../images/favicon.ico'
// import CarwashGif from '../assets/carwash.gif'
import CarwashPhoto from '../assets/carwash.jpeg'

const RootIndex = () => {
  return (
    <Layout location={'/'} isLanding>
      <Helmet title="Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box align="center" justify="center" flex>
        <Box height="medium" width="medium">
          <Image src={CarwashPhoto} fit="cover" alt="Carwash Music Album Art" />
        </Box>
      </Box>
    </Layout>
  )
}

export default RootIndex
