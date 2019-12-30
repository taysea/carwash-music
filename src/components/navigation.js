import React from 'react'
import { Anchor, Header } from 'grommet'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <Header justify="center" gap="xlarge" pad="medium">
    <Anchor
      label="music"
      size="medium"
      href="https://fanlink.to/postcardboy"
      target="_blank"
    />
    <Anchor label="archive" size="medium" />
    <Anchor label="postcard boy" size="large" href="/" />
    <Anchor label="theatre" size="medium" />
    <Anchor label="contact" size="medium" href="/contact" />
  </Header>
)
