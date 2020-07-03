import React from 'react'
import { Box, Grommet, Main, ResponsiveContext, Stack, Video } from 'grommet'
import Div100vh from 'react-div-100vh'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'
import LandingVideo from '../assets/postweb-small.mp4'
import LandingPhoto from '../assets/punch-32.jpg'
import GlobalFonts from '../fonts/fonts'
import './layout.css'
import 'typeface-lato'
import ContextProvider from '../provider/ContextProvider'

const Template = ({ children, height, isLanding }) => (
  <Grommet theme={customTheme} style={{ height: 'auto' }} full>
    <ContextProvider>
      <GlobalFonts />
      <ResponsiveContext.Consumer>
        {size => (
          <Stack guidingChild={isLanding && size !== 'small' && 'last'} fill>
            {isLanding && size !== 'small' && (
              <Div100vh>
                <Box fill>
                  <Video
                    controls={false}
                    fit="cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source key="video" src={LandingVideo} type="video/mp4" />
                  </Video>
                </Box>
              </Div100vh>
            )}
            <Div100vh style={height && { minHeight: '100rvh' }}>
              <Box
                background={
                  isLanding &&
                  size === 'small' && {
                    image: `url(${LandingPhoto})`,
                    position: 'left',
                  }
                }
                fill={!height}
                width={{ max: 'xxlarge' }}
                margin="auto"
              >
                <Navigation />
                <Main
                  flex
                  fill={false}
                  pad={{ horizontal: size !== 'small' ? undefined : 'medium' }}
                >
                  {children}
                </Main>
                <Footer isLanding={isLanding} />
              </Box>
            </Div100vh>
          </Stack>
        )}
      </ResponsiveContext.Consumer>
    </ContextProvider>
  </Grommet>
)

export default Template
