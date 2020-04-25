import React, { useContext } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Grid, ResponsiveContext, Box } from 'grommet'
import SkuCard from './SkuCard'
import { loadStripe } from '@stripe/stripe-js'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

const stripePromise = loadStripe('pk_test_fh68cISJIGdpv2qALCqwYzRP00JyIN4T7L')

export const Skus = ({ addToCart }) => {
  const size = useContext(ResponsiveContext)
  return (
    <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku {
            group(field: product___id) {
              edges {
                node {
                  id
                  product {
                    name
                  }
                  attributes {
                    name
                  }
                  price
                  currency
                  image
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
          {skus.group.map(({ edges }) => (
            <SkuCard
              key={edges[0].node.id}
              sku={edges[0].node}
              stripePromise={stripePromise}
              addToCart={addToCart}
            />
          ))}
        </Grid>
      )}
    />
  )
}
