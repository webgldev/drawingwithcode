/** @type {import('next').NextConfig} */

const path = require('path')
const withSass = require ('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          // publicPath: `/_next/static/assets`,
          // outputPath: 'static/assets',
        },
      },
    });
    return config;
  },
  webpack5: false,
  cssModules : true,
  // basePath: '/',
  // assetPrefix: '/*/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
})
