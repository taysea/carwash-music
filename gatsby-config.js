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
    title: 'Carwash Music',
    description:
      'Carswash Music is one of multiple creative projects for the nineteen year old San Diego native, Garrett Seamans. He also releases music under Postcard Boy and photo and video work known under the name phylm.',
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: process.env.SHOP_NAME,
        // The storefront access token
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
  ],
}
