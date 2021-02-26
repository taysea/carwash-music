# carwash-music

This website is built with [Grommet](http://v2.grommet.io/), [Gatsby](https://www.gatsbyjs.org/), and [Contentful](https://www.contentful.com/) for the musician, Carwash.

You can listen to his music on whatever your preferred streaming platform is.

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn run setup`.

![Command line dialog of the yarn run setup command](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/setup.jpg 'Command line dialog of the yarn run setup command')

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

`yarn run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.
