import React from 'react'
import { Box, Grommet, Main, ResponsiveContext, Stack, Video } from 'grommet'
import Div100vh from 'react-div-100vh'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'
import LandingVideo from '../assets/postweb-small.mp4'
import './layout.css'
import 'typeface-lato'

const Template = ({ children, height, isLanding }) => (
  <Grommet theme={customTheme} style={{ height: 'auto' }} full>
    <ResponsiveContext.Consumer>
      {size => (
        <Stack guidingChild={isLanding && 'last'} fill>
          {isLanding && (
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
            <Box fill={!height}>
              <Navigation />
              <Main
                flex
                fill={false}
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

export default Template
