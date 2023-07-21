import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/shared/ui-kit/stories/**/*.mdx',
    '../src/shared/ui-kit/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        '@app': path.resolve(__dirname, '../src/app'),
        '@shared': path.resolve(__dirname, '../src/shared'),
        '@packages': path.resolve(__dirname, '../src/packages'),
      };
    }

    return config;
  },

  staticDirs: ['../public'],
};
export default config;
