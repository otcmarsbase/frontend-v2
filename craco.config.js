const exec = require('child_process').exec;
const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
  },
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
      '@services': path.resolve(__dirname, 'src/services'),
      '@ddd/errors': path.resolve(__dirname, 'src/shared/ddd-errors'),
      '@schema/common': path.resolve(__dirname, 'src/shared/schema/common/src'),
      '@schema/api-gateway': path.resolve(
        __dirname,
        'src/shared/schema/api-gateway/src',
      ),
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
