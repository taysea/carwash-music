const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const archivePost = path.resolve('./src/templates/archive.js')
    const contactPost = path.resolve('./src/templates/contact.js')
    const pressPost = path.resolve('./src/templates/press.js')
    const theatrePost = path.resolve('./src/templates/theatre.js')
    const merchPost = path.resolve('./src/templates/merch.js')
    const cartTemplate = path.resolve('./src/templates/cart.js')
    const orderSuccessTemplate = path.resolve(
      './src/templates/order-confirmation.js'
    )
    const productDetailsTemplate = path.resolve(
      './src/templates/product-details.js'
    )
    resolve(
      graphql(`
        {
          productQuery: allStripeSku(sort: { fields: [price] }) {
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
                product {
                  id
                  name
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

        const string_to_slug = str => {
          str = str.replace(/^\s+|\s+$/g, '') // trim
          str = str.toLowerCase()

          // remove accents, swap ñ for n, etc
          var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
          var to = 'aaaaeeeeiiiioooouuuunc------'
          for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
          }

          str = str
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes

          return str
        }

        result.data.productQuery.edges.forEach(({ node }) => {
          createPage({
            path: `/merch/${string_to_slug(node.product.name)}`,
            component: productDetailsTemplate,
            context: {
              slug: string_to_slug(node.product.name),
              sku: node.id,
              productId: node.product.id,
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
        createPage({
          path: `/press`,
          component: pressPost,
        })
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
        createPage({
          path: `/order-success`,
          component: orderSuccessTemplate,
        })
      })
    )
  })
}
