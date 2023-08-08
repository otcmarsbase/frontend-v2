import {MockIcon as Mock} from "@app/pages/dashboard/lotView/assets/MockIcon";
import {ISimilarDealitem} from "@app/pages/dashboard/lotView/types";
import {BUSD} from "@shared/assets/tokens/BUSD";
// import MockPNG from './assets/MockPNG.png'

export const dataFields = [
    {id: 'tokenPrice', value: 2222},
    {id: 'lotFDV', value: 3333},
    {id: 'minBid', value: 4444},
    {id: 'availableSize', value: 1111}
]

export const dataFieldsHeader = [
    {id: 'deadline', value: '02.12.2024'},
    {id: 'lotId', value: 2222},
    {id: 'directly', value: 'Client'},
]

export const roundInfoFields = [
    {id: 'investmentRound', value: 'Presale'},
    {id: 'typeOfBider', value: 'individual'},
    {id: 'typeOfTransfer', value: 'Re-signing'},
    {id: 'estimateTGEdate', value: '02.12.2024'},
    {id: 'loockupPeriod', value: '6 month'},
    {id: 'vestingValendar', value: '6 month'},
    {id: 'tokenPrice', value: '1,290.03$'},
    {id: 'roundFDV', value: '1,000.000$'},
]
export const similarDeals: ISimilarDealitem[] = [

    {lotType: 'SAFT', value: 100000, nameOfAsset:'USDT', description: 'blablabla', icon: <Mock/>, tokenSymbol:'USDT'},
    {lotType: 'SAFE', value: 232323, nameOfAsset:'DAI', description: 'blablabla', icon: <Mock/>,tokenSymbol:'USDT'},
    {lotType: 'Token warrant', value: 21, nameOfAsset:'SOLANA', description: 'blablabla', icon: <Mock/>, tokenSymbol:'USDT'},
    {lotType: 'SAFT', value: 1231412412, nameOfAsset:'BUSD', description: 'blablabla', icon: <Mock/>, tokenSymbol:'USDT'},
]


export const BIDS = [
    {id: 1, bid: 1000000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 2, bid: 100561000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 4, bid: 10600000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 5, bid: 1000000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 6, bid: 1006012000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 7, bid: 10005000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 8, bid: 10004000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 9, bid: 1000000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 10, bid: 100110000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 11, bid: 10005000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 12, bid: 100120000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 13, bid: 100021000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 14, bid: 10050000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 15, bid: 10000200, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 16, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 17, bid: 1000000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 18, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 19, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 20, bid: 1000000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 21, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 22, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 23, bid: 1000000, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 24, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'},
    {id: 25, bid: 10000500, userName: 'test user', location: "LA", readyForKYC: true, bidderType:'Family Office', deadline:'12/12/2012', status: 'active'}
]
