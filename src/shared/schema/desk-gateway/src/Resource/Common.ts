export namespace Common {
  export namespace Enums {
    export const TradeDirection = ['BUY', 'SELL'] as const;
    export type TradeDirection = (typeof TradeDirection)[number];

    export const ContractSizeFactoryType = ['PRICE', 'UNIT_QUANTITY'] as const;
    export type ContractSizeFactoryType = (typeof ContractSizeFactoryType)[number];

    export const InvestRound = ['PRESALE', 'PRESEED', 'SEED', 'ROUND_A', 'ROUND_B', 'ROUND_C', 'PRIVATE', 'FUNDING_ROUND'] as const;
    export type InvestRound = (typeof InvestRound)[number];

    export const MediatorType = ['DIRECT', 'OTC_AGENT', 'MARKETPLACE'] as const;
    export type MediatorType = (typeof MediatorType)[number];

    export const InvestorType = ['INDIVIDUAL', 'VC', 'HEDGE_FUND', 'FAMILY_OFFICE', 'DAO'] as const;
    export type InvestorType = (typeof InvestorType)[number];

    export const Location = [
      'UNKNOWN',
      'AF',
      'AX',
      'AL',
      'DZ',
      'AS',
      'AD',
      'AO',
      'AI',
      'AQ',
      'AG',
      'AR',
      'AM',
      'AW',
      'AU',
      'AT',
      'AZ',
      'BS',
      'BH',
      'BD',
      'BB',
      'BY',
      'BE',
      'BZ',
      'BJ',
      'BM',
      'BT',
      'BO',
      'BA',
      'BW',
      'BV',
      'BR',
      'IO',
      'BN',
      'BG',
      'BF',
      'BI',
      'KH',
      'CM',
      'CA',
      'CV',
      'KY',
      'CF',
      'TD',
      'CL',
      'CN',
      'CX',
      'CC',
      'CO',
      'KM',
      'CG',
      'CD',
      'CK',
      'CR',
      'CI',
      'HR',
      'CU',
      'CY',
      'CZ',
      'DK',
      'DJ',
      'DM',
      'DO',
      'EC',
      'EG',
      'SV',
      'GQ',
      'ER',
      'EE',
      'ET',
      'FK',
      'FO',
      'FJ',
      'FI',
      'FR',
      'GF',
      'PF',
      'TF',
      'GA',
      'GM',
      'GE',
      'DE',
      'GH',
      'GI',
      'GR',
      'GL',
      'GD',
      'GP',
      'GU',
      'GT',
      'GG',
      'GN',
      'GW',
      'GY',
      'HT',
      'HM',
      'VA',
      'HN',
      'HK',
      'HU',
      'IS',
      'IN',
      'ID',
      'IR',
      'IQ',
      'IE',
      'IM',
      'IL',
      'IT',
      'JM',
      'JP',
      'JE',
      'JO',
      'KZ',
      'KE',
      'KI',
      'KP',
      'KR',
      'KW',
      'KG',
      'LA',
      'LV',
      'LB',
      'LS',
      'LR',
      'LY',
      'LI',
      'LT',
      'LU',
      'MO',
      'MK',
      'MG',
      'MW',
      'MY',
      'MV',
      'ML',
      'MT',
      'MH',
      'MQ',
      'MR',
      'MU',
      'YT',
      'MX',
      'FM',
      'MD',
      'MC',
      'MN',
      'MS',
      'MA',
      'MZ',
      'MM',
      'NA',
      'NR',
      'NP',
      'NL',
      'AN',
      'NC',
      'NZ',
      'NI',
      'NE',
      'NG',
      'NU',
      'NF',
      'MP',
      'NO',
      'OM',
      'PK',
      'PW',
      'PS',
      'PA',
      'PG',
      'PY',
      'PE',
      'PH',
      'PN',
      'PL',
      'PT',
      'PR',
      'QA',
      'RE',
      'RO',
      'RU',
      'RW',
      'SH',
      'KN',
      'LC',
      'PM',
      'VC',
      'WS',
      'SM',
      'ST',
      'SA',
      'SN',
      'CS',
      'SC',
      'SL',
      'SG',
      'SK',
      'SI',
      'SB',
      'SO',
      'ZA',
      'GS',
      'ES',
      'LK',
      'SD',
      'SR',
      'SJ',
      'SZ',
      'SE',
      'CH',
      'SY',
      'TW',
      'TJ',
      'TZ',
      'TH',
      'TL',
      'TG',
      'TK',
      'TO',
      'TT',
      'TN',
      'TR',
      'TM',
      'TC',
      'TV',
      'UG',
      'UA',
      'AE',
      'GB',
      'US',
      'UM',
      'UY',
      'UZ',
      'VU',
      'VE',
      'VN',
      'VG',
      'VI',
      'WF',
      'EH',
      'YE',
      'ZM',
      'ZW',
    ] as const;
    export type Location = (typeof Location)[number];
  }

  export namespace Dates {
    export type TGE = {
      value?: number; // Empty when isTBD
      isTBD: boolean;
    };

    export type Deadline = number;
  }

  export namespace Finances {
    export type Precision = number | 'DYNAMIC';

    export type UnitQuantity = {
      value: string;
      precision: Precision;
    };

    export type StablecoinQuantity = {
      value: string;
      precision: Precision;
    };

    export type TicketQuantity = {
      stablecoinQuantity: StablecoinQuantity;
      unitQuantity: UnitQuantity;
      price: Price;
    };

    export type Price = {
      value: string;
      precision: Precision;
    };

    export type Percent = {
      value: string;
      precision: Precision;
    };

    export type ContractShare = {
      fdv: StablecoinQuantity;
      contractValue: StablecoinQuantity;
      share: Percent;
    };

    export type ContractSize = {
      contractShare: ContractShare;
      unitQuantity: UnitQuantity;
      price: Price;
    };
  }

  export namespace Text {
    export type LockupPeriod = {
      period?: string; // Empty when isOver
      isOver: boolean;
    };

    export type Telegram = string;

    export type Email = string;

    export type VestingPeriod = string;
  }

  export const Location = ['RUSSIA', 'OAE'] as const;
  export type Location = (typeof Location)[number];

  export const RoundType = ['PRESALE', 'SEED'] as const;
  export type RoundType = (typeof RoundType)[number];

  export const TradeDirection = ['BUY', 'SELL'] as const;
  export type TradeDirection = (typeof TradeDirection)[number];

  export const ParticipantType = ['INDIVIDUAL', 'VC', 'HEDGE_FUND', 'FAMILY_OFFICE', 'DAO'] as const;
  export type ParticipantType = (typeof ParticipantType)[number];

  export interface UnitFullQuantity {
    asset: string; // in Unit
    quote: string; // in $
  }

  export interface ValuationInfo {
    fdv: Common.UnitFullQuantity; // All of Asset
    quantity: Common.UnitFullQuantity; // All of Contract
    price: string; // price = fdv_quantity.asset / fdv_quantity.quote
    share: string; // in percents (contract_quantity / fdv_quantity)
  }
}
