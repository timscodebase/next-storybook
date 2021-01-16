import Head from 'next/head'
import Snowflakes from '../components/SnowFlakes'
import Link from 'next/link'
import { motion } from 'framer-motion'

import linkVariant from '../lib/linkVariant'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Unfinished Story</title>
        <meta name="description" content="An visual journey of friendship turned to love at Christmas" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta property="og:title" content="The Unfinished Story" />
        <meta
          property="og:description"
          content="An visual journey of friendship turned to love at Christmas"
        />
        <meta
          property="og:image"
          content="https://unfinished-story.netlify.app/tree.jpg"
        />
        <meta
          property="og:url"
          content="https://unfinished-story.netlify.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="wrapper">
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          <Snowflakes />
          <div className={styles.container}>
            <h1>
              The Unfinished <span className={styles.largeText}>Story</span>
            </h1>
            <h3 className={styles.green}>
              An visual journey of friendship turned to love at Christmas 🎄
            </h3>
            <motion.div variants={linkVariant}>
              <Link href="/page/1">
                <a className={styles.startJourney}>Start your journey</a>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
