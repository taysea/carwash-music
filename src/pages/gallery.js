import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { Box, Grid, Image, ResponsiveContext } from 'grommet'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Masonry from 'react-masonry-component'
import Gallery from 'react-photo-gallery'

const PHOTOS = [
  {
    src:
      '//images.ctfassets.net/8p8v59xtj6fe/3NKtQhW2OrcwslY3X4kTLn/a2dd1772aab471da5d34e8bdc7617f44/earlysummer-28.jpg',
    width: 400,
    height: 597,
  },
  {
    src:
      '//images.ctfassets.net/8p8v59xtj6fe/6GQ7B471g9JFZygra8UhWB/0ca678bb23634242542b71cd47dd5162/exported-19.JPG',
    width: 400,
    height: 592,
  },
  {
    src:
      '//images.ctfassets.net/8p8v59xtj6fe/7fGgYfPtVBPU2UaP4XqXBk/b084734ab10fb93ce0ac23cfc3d85d4a/IMG_0675.JPG',
    width: 400,
    height: 265,
  },
  {
    src:
      '//images.ctfassets.net/8p8v59xtj6fe/GiW681pd9no2X7eE37XTY/5f89c71f68d9459bdbc96d9952fdb6f3/earlysummer-3.jpg',
    width: 400,
    height: 400,
  },
  {
    src:
      '//images.ctfassets.net/8p8v59xtj6fe/75zHxSyW2c7xM64ah2S6PN/085880dbaccd3ff658a2e5968703adbf/IMG_0550.JPG',
    width: 400,
    height: 600,
  },
]

class PhotoGallery extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const photos = get(this, 'props.data.allContentfulGalleryPhoto.edges')

    photos.forEach(photo => console.log(photo))

    const createPhotos = photos => {
      let photoArray = []
      photos.forEach(photo =>
        photoArray.push({
          src: photo.node.image.file.url,
          width: photo.node.image.resolutions.width,
          height: photo.node.image.resolutions.height,
        })
      )
      return photoArray
    }
    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Gallery
          photos={createPhotos(photos)}
          direction={'column'}
          margin={10}
        />
      </Layout>
    )
  }
}

export default PhotoGallery

export const pageQuery = graphql`
  query GalleryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulGalleryPhoto {
      edges {
        node {
          id
          image {
            file {
              url
            }
            resolutions {
              height
              width
            }
          }
        }
      }
    }
  }
`
