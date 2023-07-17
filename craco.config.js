const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const { addPlugins } = require('@craco/craco');

module.exports = {
  webpack: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@packages': path.resolve(__dirname, 'src/packages'),
    },
  },
};
