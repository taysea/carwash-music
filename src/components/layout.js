import React from 'react'
import { Link } from 'gatsby'
import { Box, Grommet, Stack, Video } from 'grommet'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'

class Template extends React.Component {
  render() {
    const { location, children, isLanding } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Grommet theme={customTheme} full>
        {isLanding ? (
          <Stack>
            <Box height="100vh" overflow="auto">
              <Video controls={false} fit="cover" autoPlay loop>
                <source key="video" src="/postweb.mp4" type="video/mp4" />
              </Video>
            </Box>
            <Box fill justify="between">
              <Navigation />
              <Footer color="white" />
            </Box>
          </Stack>
        ) : (
          <>
            <Navigation /> {children} <Footer />
          </>
        )}
      </Grommet>
    )
  }
}

export default Template
