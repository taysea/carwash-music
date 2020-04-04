import React from 'react'
import { Anchor, Footer as GrommetFooter } from 'grommet'
import { Instagram, Youtube, Twitter } from 'grommet-icons'

const footerLinks = [
  {
    icon: isLanding => <Instagram color={isLanding ? 'white' : 'blue!'} />,
    href: 'https://www.instagram.com/postcardboy_/',
  },
  {
    icon: isLanding => <Youtube color={isLanding ? 'white' : 'blue!'} />,
    href: 'https://www.youtube.com/channel/UCMDcXlCCckEqMHtXs553cDQ',
  },
  {
    icon: isLanding => <Twitter color={isLanding ? 'white' : 'blue!'} />,
    href: 'https://twitter.com/postcardboi',
  },
]

export const Footer = ({ justify, isLanding }) => {
  return (
    <GrommetFooter justify={justify || 'center'} pad="small">
      {footerLinks.map(link => (
        <Anchor
          key={link.href}
          href={link.href}
          icon={link.icon(isLanding)}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </GrommetFooter>
  )
}
