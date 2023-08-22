import { NODE_ENV } from '@packages/berish-configurator-core';

import { configurator } from './configurator';

export interface AppConfigType {
  environment: NODE_ENV;
  isDevelopment: boolean;
  debug: boolean;

  backend: {
    apiGatewayUrl: string;
  };

  links: {
    docsURL: string;
  };

  wagmi: {
    projectId: string;
  };

  storage: {
    DASHBOARD_LOCAL_STORAGE_KEY: string;
    AUTH_META_LOCAL_STORAGE_KEY: string;
  };
}

export const AppConfig: AppConfigType = {
  environment: NODE_ENV,
  isDevelopment: NODE_ENV === 'development',
  debug: !!configurator.get('DEBUG_MODE'),

  backend: {
    apiGatewayUrl: configurator.get('BACKEND_API_GATEWAY_URL'),
  },

  links: {
    docsURL: configurator.get('DOCS_BASE_URL'),
  },

  wagmi: {
    projectId: configurator.get('WAGMI_PROJECT_ID'),
  },

  storage: {
    DASHBOARD_LOCAL_STORAGE_KEY: 'OTC_MARSBASE/DASHBOARD',
    AUTH_META_LOCAL_STORAGE_KEY: 'OTC_MARSBASE/AUTH_META',
  },
};
