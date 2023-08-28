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

  socials: {
    discordUrl: string;
    twitterUrl: string;
    githubUrl: string;
    telegramUrl: string;
    mediumUrl: string;
    redditUrl: string;
    linktreeUrl: string;
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

  socials: {
    linktreeUrl: 'https://linktr.ee/MARSBASE/',
    discordUrl: 'https://discord.com/channels/889519633890177074/892286634224132106/',
    twitterUrl: 'https://twitter.com/MARSBASEio/',
    githubUrl: 'https://github.com/otcmarsbase/',
    telegramUrl: 'https://t.me/otcmarsbase/',
    mediumUrl: 'https://marsbaseotc.medium.com/',
    redditUrl: 'https://www.reddit.com/r/MarsbaseCryptoOTC/',
  },
};
