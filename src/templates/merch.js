import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Product } from '../components'
import { Box } from 'grommet'
import favicon from '../images/favicon.ico'
import { Skus } from '../components'
export default ({ location, data }) => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <Layout location={location} height>
      <Helmet title="Shop | Postcard Boy">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Box pad={{ top: 'large' }}>
        <Skus />
      </Box>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query {
//     allContentfulMerch {
//       edges {
//         node {
//           id
//           price
//           slug
//           name
//           images {
//             file {
//               url
//             }
//             fluid(quality: 50) {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           description
//         }
//       }
//     }
//   }
// `
