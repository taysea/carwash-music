import React from 'react'
import { Box, Grommet, Main, ResponsiveContext, Stack, Video } from 'grommet'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'
import LandingVideo from '../assets/postweb.mp4'
import GlobalFonts from '../fonts/fonts'
import './layout.css'
import Div100vh from 'react-div-100vh'

class Template extends React.Component {
  render() {
    const { location, children, isLanding } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <Grommet theme={customTheme} style={{ height: 'auto' }} full>
        <GlobalFonts />
        <ResponsiveContext.Consumer>
          {size => (
            <Stack guidingChild={isLanding && 'last'} fill>
              {isLanding && (
                <Box height="100vh">
                  <Video controls={false} fit="cover" autoPlay loop muted>
                    <source key="video" src={LandingVideo} type="video/mp4" />
                  </Video>
                </Box>
              )}
              <Div100vh>
                <Box fill>
                  <Navigation />
                  <Main
                    flex
                    pad={{ horizontal: size !== 'small' ? 'xlarge' : 'medium' }}
                  >
                    {children}
                  </Main>
                  <Footer isLanding={isLanding} />
                </Box>
              </Div100vh>
            </Stack>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

export default Template
