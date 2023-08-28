const exec = require('child_process').exec;
const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const ESLintPlugin = require('eslint-webpack-plugin');

function resolvePath(...paths) {
  return path.resolve(__dirname, ...paths);
}

function resolvePathAliases() {
  const baseUrl = compilerOptions.baseUrl || '.';
  const aliasNames = Object.keys(compilerOptions.paths || {});
  const aliases = aliasNames.map((name) => {
    const tsPaths = compilerOptions.paths?.[name] || [];
    const webpackPaths = tsPaths.map((tsPath) => resolvePath(baseUrl, tsPath));
    if (webpackPaths.length <= 0) return null;

    return { name, path: webpackPaths.length === 1 ? webpackPaths[0] : webpackPaths };
  });

  return aliases.reduce((out, alias) => ({ ...out, [alias.name]: alias.path }), {});
}

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
    alias: resolvePathAliases(),
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
