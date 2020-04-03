import React from 'react'
import { Link } from 'gatsby'
import { Box, Grommet, Main, ResponsiveContext, Stack, Video } from 'grommet'
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
              <Box height={{ min: '100vh' }}>
                <Navigation />
                <Main
                  overflow="visible"
                  pad={{ horizontal: size !== 'small' ? 'xlarge' : 'medium' }}
                >
                  {children}
                </Main>
                <Footer isLanding={isLanding} />
              </Box>
            </Stack>
          )
          // ) : (
          //   <Box height={{ min: '100%' }}>
          //     <Navigation />
          //     <Main
          //       overflow="visible"
          //       pad={{ horizontal: size !== 'small' ? 'xlarge' : 'medium' }}
          //     >
          //       {children}
          //     </Main>
          //     <Footer isLanding={isLanding} />
          //   </Box>
          // )
          }
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

export default Template
