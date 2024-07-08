export const GTM_ID =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || 'G-KQRB45MKY4'
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
