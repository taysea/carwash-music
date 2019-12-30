import React from 'react'
import { Anchor, Footer as GrommetFooter } from 'grommet'
import { Instagram, Youtube, Twitter } from 'grommet-icons'

export const Footer = ({ color }) => {
  return (
    <GrommetFooter justify="center">
      <Anchor
        href="#"
        target="_blank"
        icon={<Instagram color={color} />}
        href="https://www.instagram.com/postcardboy_/"
      />
      <Anchor
        href="#"
        target="_blank"
        icon={<Youtube color={color} />}
        href="https://www.youtube.com/channel/UCMDcXlCCckEqMHtXs553cDQ"
      />
      <Anchor href="#" target="_blank" icon={<Twitter color={color} />} />
    </GrommetFooter>
  )
}
