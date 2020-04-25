import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'

import Layout from '../components/layout'

class OrderConfirmation extends Component {
  componentDidMount() {
    // Empty localStorage after successful payment.
    localStorage.removeItem('stripe_checkout_items')
  }

  render() {
    return (
      <Layout>
        <Helmet title={`Order Successful | Postcard Boy`}>
          <link rel="icon" href={favicon} />
        </Helmet>
        <h1>Sucess!</h1>
        <Link to="/">Shop again</Link>
      </Layout>
    )
  }
}

export default OrderConfirmation
