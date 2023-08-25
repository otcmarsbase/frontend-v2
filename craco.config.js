const exec = require('child_process').exec;
const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const ESLintPlugin = require('eslint-webpack-plugin');

function resolvePath(...paths) {
  return path.resolve(__dirname, ...paths);
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
    alias: {
      '@app/hooks': resolvePath('src/app/hooks'),
      '@app/layouts': resolvePath('src/app/layouts'),
      '@app/logic': resolvePath('src/app/logic'),
      '@app/modals': resolvePath('src/app/modals'),
      '@app/pages': resolvePath('src/app/pages'),
      '@app/store': resolvePath('src/app/store'),

      '@packages/berish-configurator-core': resolvePath('src/packages/berish-configurator-core'),
      '@packages/berish-configurator-cra': resolvePath('src/packages/berish-configurator-cra'),
      '@packages/berish-rpc-axios': resolvePath('src/packages/berish-rpc-axios'),
      '@packages/berish-rpc-client': resolvePath('src/packages/berish-rpc-client'),
      '@packages/berish-rpc-client-schema': resolvePath('src/packages/berish-rpc-client-schema'),
      '@packages/react-permission': resolvePath('src/packages/react-permission'),
      '@packages/react-portal': resolvePath('src/packages/react-portal'),
      '@packages/react-runtime-layout': resolvePath('src/packages/react-runtime-layout'),
      '@packages/react-utils': resolvePath('src/packages/react-utils'),
      '@packages/router5-react-auto': resolvePath('src/packages/router5-react-auto'),
      '@packages/service-manager': resolvePath('src/packages/service-manager'),

      '@services/backend-api-service': resolvePath('src/services/backend-api-service'),

      '@shared/assets': resolvePath('src/shared/assets/src'),
      '@shared/config': resolvePath('src/shared/config'),

      '@ddd/errors': resolvePath('src/shared/ddd-errors'),
      '@schema/common': resolvePath('src/shared/schema/common/src'),
      '@schema/errors': resolvePath('src/shared/schema/errors/src'),
      '@schema/api-gateway': resolvePath('src/shared/schema/api-gateway/src'),

      '@shared/theme': resolvePath('src/shared/theme'),
      '@shared/types': resolvePath('src/shared/types'),
      '@shared/ui-kit': resolvePath('src/shared/ui-kit'),
      '@shared/ui-logic': resolvePath('src/shared/ui-logic'),
      '@shared/ui-molecules': resolvePath('src/shared/ui-molecules'),
      '@shared/utils': resolvePath('src/shared/utils'),
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
