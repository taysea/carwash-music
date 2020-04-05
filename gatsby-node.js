const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const archivePost = path.resolve('./src/templates/archive.js')
    const contactPost = path.resolve('./src/templates/contact.js')
    const pressPost = path.resolve('./src/templates/press.js')
    const theatrePost = path.resolve('./src/templates/theatre.js')
    resolve(
      graphql(`
        {
          allContentfulGalleryPhoto {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

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
      })
    )
  })
}
