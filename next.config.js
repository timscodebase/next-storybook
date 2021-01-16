const client = require('./client')

module.exports = {
  target: 'serverless',
  exportPathMap: async function (defaultPathMap) {
    const paths = await client
      .fetch('*[_type == "page" && defined(page)]')
      .then((data) =>
        data.reduce(
          (acc, page) => ({
            '/': { page: '/' },
            ...acc,
            [`/page/${page}`]: { page: '/page/[page]', query: { page } },
          }),
          defaultPathMap,
        ),
      )
      .catch(console.error)
    console.log(paths)
    return paths
  },
  webpack(config, options) {
    const { isServer } = options
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/media/`,
            outputPath: `${isServer ? '../' : ''}media/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config
  },
}