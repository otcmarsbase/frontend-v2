const exec = require('child_process').exec;
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

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
    plugins: [
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js', 'jsx'],
        useEslintrc: true,
        fix: true,
        fixTypes: ['problem', 'layout', 'suggestion'],
      }),
      {
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
            exec('yarn gen:theme-typings', (err, stdout, stderr) => {
              if (stdout) process.stdout.write(stdout);
              if (stderr) process.stderr.write(stderr);
            });
          });
        },
      },
    ],
  },
};
