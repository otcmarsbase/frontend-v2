import {ComponentWithAs, IconProps} from "@chakra-ui/react";
import {GitHubIcon as Mock} from './GithubIcon'

export interface ILotViewLinks {
    icon: ComponentWithAs<"svg", IconProps>,
    text: string,
    href: string
}

export const officialLinks: ILotViewLinks[] = [
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GitHub',
        href: 'GitHub ref'
    }
]

export const verticalItems: ILotViewLinks[] = [
    {
        icon: Mock,
        text: 'Metavers',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'GameFi',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'NFT',
        href: 'GitHub ref'
    },
    {
        icon: Mock,
        text: 'Social',
        href: 'GitHub ref'
    }
]

interface IHeaderFields {
    param: string
    value: number
}

interface IAsset {
    icon: string,
    name: string,
    title: string,
    description: string,
    headerFields: IHeaderFields[],
    officialLinks: ILotViewLinks[],
    verticalItems: ILotViewLinks[],
}
export const AssetMock: IAsset = {
    icon: 'icon',
    name: 'Asset Name',
    description: 'Scroll aims to build an EVM-compatible zk-Rollup with a strong proving asdasa  nScroll aims to build an EVM-compatible zk-Rollup with a strong proving n Scroll aims to bui ssss ld an EVM-compatible zk-Rollup with a strong proving n Scroll aims to build an EVM-compatible zk-Rollup with a strong proving n Scroll aims to build an EVM-compatible zk-Rollup with a strong proving n Scroll aims to build an EVM-compatible zk-Rollup with a strong proving n',
    title: 'Scroll aims to build an EVM-compatible zk-Rollup with aasd asdasd',
    officialLinks: officialLinks,
    verticalItems: verticalItems,
    headerFields: [
        {
            param: 'averagePerPurchase',
            value: 124563
        },
        {
            param: 'averagBidsFDV',
            value: 124563
        },
        {
            param: 'averageLotFDV',
            value: 124563
        },
        {
            param: 'marketPrice',
            value: 124563
        },
        {
            param: 'offersOnSell',
            value: 124563
        },
        {
            param: 'offersOnBuy',
            value: 124563
        },
        {
            param: 'lotValueOnSell',
            value: 124563
        },
        {
            param: 'lotValueOnBuy',
            value: 124563
        }
    ]
}
