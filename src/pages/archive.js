import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from 'react-photo-gallery'

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
