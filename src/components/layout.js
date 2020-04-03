import React from 'react'
import { Link } from 'gatsby'
import { Box, Grommet, Stack, Video } from 'grommet'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'
import LandingVideo from '../assets/postweb.mp4'
import GlobalFonts from '../fonts/fonts'

class Template extends React.Component {
  render() {
    const { location, children, isLanding } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <Grommet theme={customTheme} full style={{ height: 'auto' }}>
        <GlobalFonts />
        {isLanding ? (
          <Stack>
            <Box height="100vh" overflow="auto">
              <Video controls={false} fit="cover" autoPlay loop>
                <source key="video" src={LandingVideo} type="video/mp4" />
              </Video>
            </Box>
            <Box fill justify="between">
              <Navigation />
              {children}
              <Footer isLanding={isLanding} />
            </Box>
          </Stack>
        ) : (
          <Box height={{ min: '100vh' }}>
            <Navigation />{' '}
            <Box flex="grow" pad={{ horizontal: 'xlarge' }}>
              {children}
            </Box>{' '}
            <Footer isLanding={isLanding} />
          </Box>
        )}
      </Grommet>
    )
  }
}

export default Template
