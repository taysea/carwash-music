import React from 'react'
import { Box, Grommet, Main, ResponsiveContext } from 'grommet'
import Div100vh from 'react-div-100vh'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'
import LandingPhoto from '../assets/still011.jpg'
import MobilePhoto from '../assets/still015.jpg'
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
          <Div100vh style={height && { minHeight: '100rvh' }}>
            <Box
              background={
                isLanding && {
                  image:
                    size !== 'small'
                      ? `url(${LandingPhoto})`
                      : `url(${MobilePhoto})`,
                  position: size !== 'small' ? 'bottom' : 'left',
                }
              }
              fill
            >
              <Box margin="auto" fill>
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
            </Box>
          </Div100vh>
        )}
      </ResponsiveContext.Consumer>
    </ContextProvider>
  </Grommet>
)

export default Template
