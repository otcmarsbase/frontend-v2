const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@logic': path.resolve(__dirname, 'src/logic'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@packages': path.resolve(__dirname, 'src/packages'),
    },
  },
};
