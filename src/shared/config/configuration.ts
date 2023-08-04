import { boolParser, createGetConfig } from 'src/packages/browser-config';
import packageJson from '../../../package.json';

const getConfig = createGetConfig<RawConfiguration>({
  prefix: 'REACT_APP_',
  from: ['window', 'process'],
  withoutPrefix: ['NODE_ENV'],
});

export interface RawConfiguration {
  NODE_ENV: string;
  DEBUG_MODE: string;

  DOCS_BASE_URL: string;
  WAGMI_PROJECT_ID: string;
}

export const configuration = {
  NODE_ENV: getConfig('NODE_ENV'),
  DEBUG_MODE: getConfig('DEBUG_MODE', boolParser),

  PACKAGE_NAME: packageJson.name,
  PACKAGE_VERSION: packageJson.version,

  DOCS: {
    DOCS_BASE_URL: getConfig('DOCS_BASE_URL'),
  },

  WAGMI: {
    WAGMI_PROJECT_ID: getConfig('WAGMI_PROJECT_ID'),
  },
};
