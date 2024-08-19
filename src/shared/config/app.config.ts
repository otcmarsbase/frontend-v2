import { NODE_ENV } from '@packages/berish-configurator-core';

import packageJson from '../../../package.json';

import { configurator } from './configurator';

export interface AppConfigType {
  environment: NODE_ENV;
  isDevelopment: boolean;
  debug: boolean;
  version: string;

  backend: {
    apiGatewayUrl: string;
  };

  links: {
    docsURL: string;
    howItWorksURL: string;
    aboutURL: string;
    supportURL: string;
    termsOfUseURL: string;
    privacyPolicyURL: string;
    telegramBotURL: string;
  };

  wagmi: {
    projectId: string;
  };

  storage: {
    DASHBOARD_LOCAL_STORAGE_KEY: string;
    AUTH_META_LOCAL_STORAGE_KEY: string;
  };

  socials: {
    linkedinUrl: string;
    twitterUrl: string;
    githubUrl: string;
    telegramUrl: string;
    mediumUrl: string;
    redditUrl: string;
    linktreeUrl: string;
    youtubeUrl: string;
    instagramUrl: string;
  };

  analytics: {
    googleTagId: string;
  };
}

export const AppConfig: AppConfigType = {
  environment: NODE_ENV,
  isDevelopment: NODE_ENV === 'development',
  debug: !!configurator.get('DEBUG_MODE'),
  version: configurator.get('SHARED_VERSION') || packageJson.version,

  backend: {
    apiGatewayUrl: configurator.get('BACKEND_API_GATEWAY_URL'),
  },

  links: {
    docsURL: configurator.get('DOCS_BASE_URL'),
    howItWorksURL: ' https://otc-marsbase-1.gitbook.io/marsbase/',
    aboutURL: 'https://otc-marsbase-1.gitbook.io/marsbase/about-us/about-marsbase',
    supportURL: 'https://t.me/marsbase_saft_bot',
    termsOfUseURL: 'https://drive.google.com/file/d/1PlJSXdu7b8dH3EAY7XY7NPSsB9YZS6Pg/view',
    privacyPolicyURL: 'https://drive.google.com/file/d/1mHwB3uSvzpRFOQftK8EOTmxMRX2LVfq8/view',
    telegramBotURL: configurator.get('TELEGRAM_BOT_URL'),
  },

  wagmi: {
    projectId: configurator.get('WAGMI_PROJECT_ID'),
  },

  storage: {
    DASHBOARD_LOCAL_STORAGE_KEY: 'OTC_MARSBASE/DASHBOARD',
    AUTH_META_LOCAL_STORAGE_KEY: 'OTC_MARSBASE/AUTH_META',
  },

  socials: {
    linkedinUrl: 'https://www.linkedin.com/company/marsbase/',
    linktreeUrl: 'https://linktr.ee/MARSBASE/',
    twitterUrl: 'https://twitter.com/MARSBASEio/',
    githubUrl: 'https://github.com/otcmarsbase/',
    telegramUrl: 'https://t.me/marsbase_network/',
    mediumUrl: 'https://marsbaseotc.medium.com/',
    redditUrl: 'https://www.reddit.com/r/MarsbaseCryptoOTC/',
    youtubeUrl: 'https://www.youtube.com/channel/UCmtM-VPNiLLQljTEJAd0PHg',
    instagramUrl: 'https://www.instagram.com/marsbase.io/',
  },

  analytics: {
    googleTagId: configurator.get('GOOGLE_TAG_ID'),
  },
};
