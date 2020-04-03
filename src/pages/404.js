import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import favicon from '../images/favicon.ico'

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet title="Page not found">
        <link rel="icon" href={favicon} />
      </Helmet>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
