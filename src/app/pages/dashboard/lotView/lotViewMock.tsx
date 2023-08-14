import {
    IBid,
    IDataFieldsInterface,
    ILotViewLinks, ILotViewProjectData,
    IRoundInfoFields,
    ISimilarDealItem
} from "@app/pages/dashboard/lotView/types";
import {ELotType} from "@app/pages/offers/create/components/ProjectInfo/types";
import {ETypeOfDeal} from "@app/pages/offers/create/types";
import {MockIcon as Mock} from "@shared/assets/mocks/MockIcon";
import {GitHubIcon} from "@shared/assets/socials/GithubIcon";
import {TwitterIcon as TwitterIconMock} from "@shared/assets/socials/TwitterIcon";

export const roundInfoFields: IRoundInfoFields[] = [
    {id: 'investmentRound', value: 'Presale'},
    {id: 'estimateTGEdate', value: new Date()},
    {id: 'lockupPeriod', value: 2},
    {id: 'vestingCalendar', value: 6},
    {id: 'roundTokenPrice', value: 1290000},
    {id: 'roundFDV', value: 1000000}
]

export const dataFieldsMain: IDataFieldsInterface[] = [
    {id: 'lotEquityPrice', value: 2222},
    {id: 'typeOfBidder', value: 'Individual'},
    {id: 'lotFDV', value: 3333},
    {id: 'minBid', value: 4444}

]

export const similarDealsMock: ISimilarDealItem[] = [
    {
        dealID: 944,
        lotType: ELotType.SAFT,
        typeOfDeal: ETypeOfDeal.BUY,
        isHot: true,
        nameOfAsset: 'Layer zero',
        icon: <Mock/>,
        currentAmount: 12455,
        totalAmount: 121225
    },
    {
        dealID: 65,
        lotType: ELotType.SAFE,
        typeOfDeal: ETypeOfDeal.SELL,
        isHot: true,
        nameOfAsset: 'Paxos',
        icon: <Mock/>,
        currentAmount: 12455,
        totalAmount: 121225
    },
    {
        dealID: 3434,
        lotType: ELotType.TOKEN_WARRANT,
        typeOfDeal: ETypeOfDeal.SELL,
        isHot: false,
        nameOfAsset: 'China moon',
        icon: <Mock/>,
        currentAmount: 12455,
        totalAmount: 121225
    },
    {
        dealID: 12124,
        lotType: ELotType.SAFT,
        typeOfDeal: ETypeOfDeal.BUY,
        isHot: false,
        nameOfAsset: 'rushrick',
        icon: <Mock/>,
        currentAmount: 12455,
        totalAmount: 121225
    },
]


export const BIDSmock: IBid[] = [
    {
        id: 1,
        bid: 1000000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 2,
        bid: 100561000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 4,
        bid: 10600000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 5,
        bid: 1000000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 6,
        bid: 1006012000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 7,
        bid: 10005000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 8,
        bid: 10004000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 9,
        bid: 1000000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 10,
        bid: 100110000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 11,
        bid: 10005000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 12,
        bid: 100120000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 13,
        bid: 100021000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 14,
        bid: 10050000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 15,
        bid: 10000200,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 16,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 17,
        bid: 1000000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 18,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 19,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 20,
        bid: 1000000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 21,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 22,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 23,
        bid: 1000000,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 24,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    },
    {
        id: 25,
        bid: 10000500,
        bidSize: 1202,
        userName: 'test user',
        location: "LA",
        validation: true,
        bidderType: 'Family Office',
        deadline: new Date(),
        status: 'active'
    }
]


export const socialMediaLinks: ILotViewLinks[] = [
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
    {
        icon: <TwitterIconMock/>,
        text: 'Twitter',
        href: 'Twitter ref'
    },
]

export const officialLinks: ILotViewLinks[] = [
    {
        icon: <GitHubIcon/>,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: <GitHubIcon/>,
        text: 'GitHub',
        href: 'GitHub ref'
    },
    {
        icon: <GitHubIcon/>,
        text: 'GitHub',
        href: 'GitHub ref'
    }
]

export const verticalItems: ILotViewLinks[] = [
    {
        icon: <GitHubIcon/>,
        text: 'Metavers',
        href: 'GitHub ref'
    },
    {
        icon: <GitHubIcon/>,
        text: 'GameFi',
        href: 'GitHub ref'
    },
    {
        icon: <GitHubIcon/>,
        text: 'NFT',
        href: 'GitHub ref'
    },
    {
        icon: <GitHubIcon/>,
        text: 'Social',
        href: 'GitHub ref'
    }
]
let date = new Date();
date.setDate(date.getDate() + 1);

export const LotViewProjectData: ILotViewProjectData = {
    name: 'Worldcoin',
    description: 'Scroll aims to build an EVM-compatible zk-Rollup with a strong proving Scroll aims to build an EVM-compatible zk-Rollup with a strong proving Scroll aims to build an EVM-compatible zk-Rollup with a strong proving Scroll aims to build an EVM-compatible zk-Rollup with a strong proving',
    id: 21462,
    typeOfDeal: ETypeOfDeal.BUY,
    typeOfLot: ELotType.SAFT,
    userAvatar: <GitHubIcon/>,
    userName: 'Mao',
    currentAmount: 12122,
    totalAmount: 22333,
    nameOfSeller: 'OTC Agent',
    dataFieldsMain: dataFieldsMain,
    roundInfoFields: roundInfoFields,
    analitics: '',
    auctionEndDate: date,
    Icon: Mock,
    socialMediaLinks: socialMediaLinks,
    officialLinks: officialLinks,
    verticalItems: verticalItems,
}
