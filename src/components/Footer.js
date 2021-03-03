import React from 'react'
import { Anchor, Footer as GrommetFooter } from 'grommet'
import { Instagram, Youtube } from 'grommet-icons'
import { Substack } from '.'

const footerLinks = [
  {
    icon: isLanding => <Instagram color="#17355f" />,
    href: 'https://www.instagram.com/from.garrett/',
  },
  {
    icon: isLanding => <Youtube color="#17355f" />,
    href: 'https://www.youtube.com/channel/UCMDcXlCCckEqMHtXs553cDQ',
  },
  {
    icon: isLanding => <Substack color="#17355f" />,
    href: 'https://junkmailclub.substack.com/',
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
