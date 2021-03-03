import React from 'react'
import { Box, Grommet, Main, ResponsiveContext } from 'grommet'
import Div100vh from 'react-div-100vh'
import Navigation from './navigation'
import { Footer } from './Footer'
import { customTheme } from '../theme'
import GlobalFonts from '../fonts/fonts'
import './layout.css'
import 'typeface-lato'
import ContextProvider from '../provider/ContextProvider'

const Template = ({ children, height, isLanding }) => (
  <Grommet
    background="#F6F3EA"
    theme={customTheme}
    style={{ height: 'auto', width: '100%' }}
    full
  >
    <ContextProvider>
      <GlobalFonts />
      <ResponsiveContext.Consumer>
        {size => (
          <Div100vh style={height && { minHeight: '100rvh' }}>
            <Box fill>
              <Box margin="auto" fill>
                <Navigation />
                <Main flex fill={false} pad={{ horizontal: 'medium' }}>
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
