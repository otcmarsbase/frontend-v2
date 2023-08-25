// import { HEADER_FIELD_TITLES_BY_PARAM } from '@app/pages/dashboard/asset/constants';
// import { ILotViewLinks } from '@app/pages/dashboard/asset/types';

import { HEADER_FIELD_TITLES_BY_PARAM } from './constants';
import { ILotViewLinks } from './types';

export const officialLinks: ILotViewLinks[] = [
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GitHub',
    href: 'GitHub ref',
  },
];

export const verticalItems: ILotViewLinks[] = [
  {
    icon: null,
    text: 'Metavers',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'GameFi',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'NFT',
    href: 'GitHub ref',
  },
  {
    icon: null,
    text: 'Social',
    href: 'GitHub ref',
  },
];

interface IHeaderFields {
  param: keyof typeof HEADER_FIELD_TITLES_BY_PARAM;
  value: number;
}

interface IAsset {
  icon: string;
  name: string;
  assetResearch: string;
  title: string;
  description: string;
  headerFields: IHeaderFields[];
  officialLinks: ILotViewLinks[];
  verticalItems: ILotViewLinks[];
}
export const AssetMock: IAsset = {
  icon: 'icon',
  name: 'Asset Name',
  assetResearch: 'assetResearch',
  description:
    'Scroll aims to build an EVM-compatible zk-Rollup with a strong proving asdasa  nScroll aims to build an EVM-compatible zk-Rollup with a strong proving n Scroll aims to bui ssss ld an EVM-compatible zk-Rollup with a strong proving n Scroll aims to build an EVM-compatible zk-Rollup with a strong proving n Scroll aims to build an EVM-compatible zk-Rollup with a strong proving n Scroll aims to build an EVM-compatible zk-Rollup with a strong proving n',
  title: 'Scroll aims to build an EVM-compatible zk-Rollup with aasd asdasd',
  officialLinks: officialLinks,
  verticalItems: verticalItems,
  headerFields: [
    {
      param: 'averagePerPurchase' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'averagBidsFDV' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'averageLotFDV' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'marketPrice' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'offersOnSell' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'offersOnBuy' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'lotValueOnSell' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
    {
      param: 'lotValueOnBuy' as keyof typeof HEADER_FIELD_TITLES_BY_PARAM,
      value: 124563,
    },
  ],
};
