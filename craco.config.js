const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@packages': path.resolve(__dirname, 'src/packages'),
    },
  },
};
