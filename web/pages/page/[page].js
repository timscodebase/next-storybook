import { useRouter } from 'next/router'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { motion } from 'framer-motion'

import client from '../../client'
import linkVariant from '../../lib/linkVariant'

import Footer from '../../components/Footer'

import styles from '../../styles/Home.module.css'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default function Page({ numberOfPages, pageData, markdown }) {
  const { alt, body = [], mainImage = '', page } = pageData
  const router = useRouter()

  const renderedMarkdown = hydrate(markdown)

  function gotoNextPage() {
    if (page < numberOfPages) {
      router.push(`/page/${nextPage}`)
    }
  }

  function gotoNextPrevPage() {
    if (page > 1) {
      router.push(`/page/${prevPage}`)
    }
  }

  const prevPage = page - 1
  const nextPage = page + 1

  const handlers = useSwipeable({
    onSwipedLeft: () => gotoNextPage(),
    onSwipedRight: () => gotoNextPrevPage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <div {...handlers} className="wrapper">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className={styles.swipeInfo}>
          <p>Swipe to change page</p>
        </div>
        <div className={styles.page}>
          <motion.div variants={linkVariant}>
            <div className={styles.story}>
              <BlockContent
                blocks={body}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...client.config()}
              />
            </div>

            {renderedMarkdown && (
              <div className="end-wrapper">{renderedMarkdown}</div>
            )}
            {mainImage && (
              <div className={styles.art}>
                <Image
                  alt={alt}
                  className={styles.mainImage}
                  width="400"
                  height="400"
                  src={`${urlFor(mainImage).width(400).height(400).url()}`}
                />
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

const numberOfPagesQuery = groq`count(*[_type == "page"])`
const pageQuery = groq`*[_type == "page" && page == $page][0]{
  "alt": mainImage.alt,
  body,
  page,
  mainImage,
  markdown
}`

export const getServerSideProps = async context => {
  let { page = '' } = context.query
  
  page = parseInt(page)

  const numberOfPages = await client.fetch(numberOfPagesQuery)
  const pageData = await client.fetch(pageQuery, page)
  const markdown = await renderToString(pageData.markdown)

  return { props: { numberOfPages, pageData, markdown } }
}

Page.propTypes = {
  alt: PropTypes.string,
  body: PropTypes.array,
  page: PropTypes.number,
}
