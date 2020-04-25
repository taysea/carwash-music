require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const contentfulConfig = {
  spaceId: '8p8v59xtj6fe',
  accessToken: 'yYVCTgoQyrxfYuyCLMkz9eDhpuiQNmXxGVW0qXZLytw',
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Postcard Boy',
    description:
      'Postcard Boy is one of multiple creative projects for the nineteen year old San Diego native. He uses this outlet as a way to be more self-expressive in comparison to his photo and video work known under the name phylm.',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku'],
        secretKey: process.env.STRIPE_API_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
