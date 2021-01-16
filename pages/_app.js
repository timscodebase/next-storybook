import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>The Unfinished Story 🎄</title>
        <meta
          name="Description"
          content="An visual journey of friendship turned to love at Christmas"
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      break
    case 'LCP':
      break
    case 'CLS':
      break
    case 'FID':
      break
    case 'TTFB':
      break
    case 'Next.js-hydration':
      break
    case 'Next.js-route-change-to-render':
      break
    case 'Next.js-render':
      break
    default:
      break
  }
}
