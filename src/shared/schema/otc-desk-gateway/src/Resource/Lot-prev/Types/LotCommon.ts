import { Common } from '../../Common';
import { Lot } from '../Lot';

export namespace LotCommon {
  export type Draft = {
    createdAt: number;

    direction: Common.Enums.TradeDirection;
    telegram?: Common.Text.Telegram;
    deadline?: Common.Dates.Deadline;
    mediatorType?: Common.Enums.MediatorType;
    offerMakerTypes?: Common.Enums.InvestorType[];
    bidMakerTypes?: Common.Enums.InvestorType[];
  };

  export type OnModeration = {
    createdAt: number;
    sendOnModerationAt: number;

    direction: Common.Enums.TradeDirection;
    telegram: Common.Text.Telegram;
    deadline?: Common.Dates.Deadline;
    mediatorType: Common.Enums.MediatorType;
    offerMakerTypes: Common.Enums.InvestorType[];
    bidMakerTypes?: Common.Enums.InvestorType[];
  };

  export type Active = {
    createdAt: number;
    sendOnModerationAt: number;
    publishedAt: number;

    direction: Common.Enums.TradeDirection;
    telegram: Common.Text.Telegram;
    deadline?: Common.Dates.Deadline;
    mediatorType: Common.Enums.MediatorType;
    offerMakerTypes: Common.Enums.InvestorType[];
    bidMakerTypes?: Common.Enums.InvestorType[];
  };

  export type Completed = {
    createdAt: number;
    sendOnModerationAt: number;
    publishedAt: number;
    completedAt: number;

    direction: Common.Enums.TradeDirection;
    telegram: Common.Text.Telegram;
    deadline?: Common.Dates.Deadline;
    mediatorType: Common.Enums.MediatorType;
    offerMakerTypes: Common.Enums.InvestorType[];
    bidMakerTypes?: Common.Enums.InvestorType[];
    reason: Lot.Enums.LotCompletedReasonType;
  };
}
