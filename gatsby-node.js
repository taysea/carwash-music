const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const archivePost = path.resolve('./src/templates/archive.js')
    const contactPost = path.resolve('./src/templates/contact.js')
    // const pressPost = path.resolve('./src/templates/press.js')
    const theatrePost = path.resolve('./src/templates/theatre.js')
    const merchPost = path.resolve('./src/templates/merch.js')
    const cartTemplate = path.resolve('./src/templates/cart.js')
    const productDetailsTemplate = path.resolve(
      './src/templates/product-details.js'
    )
    resolve(
      graphql(`
        {
          productQuery: allShopifyProduct {
            edges {
              node {
                id
                availableForSale
                description
                title
                handle
                images {
                  localFile {
                    url
                  }
                  originalSrc
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                variants {
                  id
                  title
                  availableForSale
                  price
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.productQuery.edges.forEach(({ node }) => {
          createPage({
            path: `/merch/${node.handle}`,
            component: productDetailsTemplate,
            context: {
              slug: node.handle,
              productId: node.id,
            },
          })
        })

        createPage({
          path: `/archive`,
          component: archivePost,
        })
        createPage({
          path: `/contact`,
          component: contactPost,
        })
        // createPage({
        //   path: `/press`,
        //   component: pressPost,
        // })
        createPage({
          path: `/theatre`,
          component: theatrePost,
        })
        createPage({
          path: `/merch`,
          component: merchPost,
        })
        createPage({
          path: `/cart`,
          component: cartTemplate,
        })
      })
    )
  })
}
