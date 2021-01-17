const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: `${process.env.PROJECT_ID}`,
  dataset: `${process.env.DATASET}`,
  useCdn: true,
})
