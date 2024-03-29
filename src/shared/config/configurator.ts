import { CraConfigurator } from '@packages/berish-configurator-cra';

export interface EnvConfiguration {
  NODE_ENV: string;
  DEBUG_MODE: string;

  SHARED_VERSION: string;

  DOCS_BASE_URL: string;
  WAGMI_PROJECT_ID: string;
  BACKEND_API_GATEWAY_URL: string;
}

export const configurator = new CraConfigurator<EnvConfiguration>({
  prefix: 'REACT_APP_',
  from: ['window', 'process'],
});
