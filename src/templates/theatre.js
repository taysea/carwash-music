import React, { useEffect } from 'react'
import { Anchor, Box, Text } from 'grommet'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

export default ({ location }) => {
  useEffect(() => {
    async function fetchPhotos() {
      try {
        // setLoadingStatus(STATUSES.LOADING)
        const res = await fetch(
          `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlistItems.list?
          part=snippet,contentDetails,status
          &playlistId=UUMDcXlCCckEqMHtXs553cDQ`
        )
        // const photos = await res.json()
        // if (res.ok && photos.length > 0) {
        //   setData(photos)
        //   setLoadingStatus(STATUSES.SUCCESS)
        // } else if (res.ok && photos.length === 0) {
        //   setLoadingStatus(STATUSES.NONE)
        // } else {
        //   setLoadingStatus(STATUSES.ERROR)
        // }
      } catch (e) {
        console.log('error')
        // setLoadingStatus(STATUSES.ERROR)
      }
    }
    fetchPhotos()
  }, [])

  return (
    <Layout location={location}>
      <Helmet title="Theatre">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box align="center" justify="center">
        <Box>
          <Text>hey</Text>
          <Anchor label="mgmt@postcardboymusic.com" />
        </Box>
      </Box>
    </Layout>
  )
}
