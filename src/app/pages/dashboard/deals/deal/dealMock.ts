import mockProjectIcon from "@shared/assets/mocks/mockProjectIcon.png";
import {Dashboard} from "@shared/types";

export const dealMock: Dashboard.IDealItemExtended = {
    id: 32679,
    lotName: 'USDT',
    offerType: 'BUY',
    lotType: 'SAFT',
    lotId: 345,
    dealSize: 124532,
    dealFDV: 124532,
    createdAt: new Date(),
    status: 'COMPLETED',
    lotIconName: mockProjectIcon,
    offerMakerName: 'CherchillCherchillCherchillCherchill',
    offerMakerIcon: mockProjectIcon,
    offerMakerWallet: '0x3FFf7ab422DdcD42fD49F2b87549cd9E3AE6e786',
    moderatorName: 'RusveltRusveltRusveltRusveltRusvelt',
    moderatorIcon: mockProjectIcon,
    moderatorWallet: '0x3FFf7ab422DdcD42fD49F2b87549cd9E3AE6e786',
    bidMakerName: 'Si Zsi PinSi Zsi PinSi Zsi PinSi Zsi Pin',
    bidMakerIcon: mockProjectIcon,
    bidMakerWallet: '0x3FFf7ab422DdcD42fD49F2b87549cd9E3AE6e786',
    telegramChatLink: 'https://t.me/c/1854143695/70'
}
