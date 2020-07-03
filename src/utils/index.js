const CART_KEY = 'stripe_checkout_items'

export const setCart = (value, cartKey = CART_KEY) => {
  if (typeof window !== 'undefined' && localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value))
  }
}

export const getCart = (cartKey = CART_KEY) => {
  if (
    typeof window !== 'undefined' &&
    localStorage &&
    localStorage.getItem(cartKey)
  ) {
    return JSON.parse(localStorage.getItem(cartKey))
  }
  return []
}

export const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price)
}

export const string_to_slug = str => {
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
