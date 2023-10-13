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
      'AFGHANISTAN',
      'ALBANIA',
      'ALGERIA',
      'ANDORRA',
      'ANGOLA',
      'ANTIGUA AND BARBUDA',
      'ARGENTINA',
      'ARMENIA',
      'AUSTRALIA',
      'AUSTRIA',
      'AZERBAIJAN',
      'BAHAMAS',
      'BAHRAIN',
      'BANGLADESH',
      'BARBADOS',
      'BELARUS',
      'BELGIUM',
      'BELIZE',
      'BENIN',
      'BHUTAN',
      'BOLIVIA',
      'BOSNIA AND HERZEGOVINA',
      'BOTSWANA',
      'BRAZIL',
      'BRUNEI',
      'BULGARIA',
      'BURKINA FASO',
      'BURUNDI',
      'CABO VERDE',
      'CAMBODIA',
      'CAMEROON',
      'CANADA',
      'CENTRAL AFRICAN REPUBLIC',
      'CHAD',
      'CHILE',
      'CHINA',
      'COLOMBIA',
      'COMOROS',
      'CONGO (THE DEMOCRATIC REPUBLIC OF THE)',
      'CONGO (THE)',
      'COSTA RICA',
      'CROATIA',
      'CUBA',
      'CYPRUS',
      'CZECHIA',
      `CÔTE D'IVOIRE`,
      'DENMARK',
      'DJIBOUTI',
      'DOMINICA',
      'DOMINICAN REPUBLIC',
      'ECUADOR',
      'EGYPT',
      'EL SALVADOR',
      'EQUATORIAL GUINEA',
      'ERITREA',
      'ESTONIA',
      'ESWATINI',
      'ETHIOPIA',
      'FIJI',
      'FINLAND',
      'FRANCE',
      'GABON',
      'GAMBIA (THE)',
      'GEORGIA',
      'GERMANY',
      'GHANA',
      'GREECE',
      'GRENADA',
      'GUATEMALA',
      'GUINEA',
      'GUINEA-BISSAU',
      'GUYANA',
      'HAITI',
      'HOLY SEE (THE)',
      'HONDURAS',
      'HUNGARY',
      'ICELAND',
      'INDIA',
      'INDONESIA',
      'IRAN (ISLAMIC REPUBLIC OF)',
      'IRAQ',
      'IRELAND',
      'ISRAEL',
      'ITALY',
      'JAMAICA',
      'JAPAN',
      'JORDAN',
      'KAZAKHSTAN',
      'KENYA',
      'KIRIBATI',
      'KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)',
      'KOREA (THE REPUBLIC OF)',
      'KUWAIT',
      'KYRGYZSTAN',
      'LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)',
      'LATVIA',
      'LEBANON',
      'LESOTHO',
      'LIBERIA',
      'LIBYA',
      'LIECHTENSTEIN',
      'LITHUANIA',
      'LUXEMBOURG',
      'MADAGASCAR',
      'MALAWI',
      'MALAYSIA',
      'MALDIVES',
      'MALI',
      'MALTA',
      'MARSHALL ISLANDS (THE)',
      'MAURITANIA',
      'MAURITIUS',
      'MEXICO',
      'MICRONESIA (FEDERATED STATES OF)',
      'MOLDOVA (THE REPUBLIC OF)',
      'MONACO',
      'MONGOLIA',
      'MONTENEGRO',
      'MOROCCO',
      'MOZAMBIQUE',
      'MYANMAR',
      'NAMIBIA',
      'NAURU',
      'NEPAL',
      'NETHERLANDS (THE)',
      'NEW ZEALAND',
      'NICARAGUA',
      'NIGER (THE)',
      'NIGERIA',
      'NORTH MACEDONIA',
      'NORWAY',
      'OMAN',
      'PAKISTAN',
      'PALAU',
      'PALESTINE, STATE OF',
      'PANAMA',
      'PAPUA NEW GUINEA',
      'PARAGUAY',
      'PERU',
      'PHILIPPINES (THE)',
      'POLAND',
      'PORTUGAL',
      'QATAR',
      'ROMANIA',
      'RUSSIAN FEDERATION (THE)',
      'RWANDA',
      'SAINT KITTS AND NEVIS',
      'SAINT LUCIA',
      'SAINT VINCENT AND THE GRENADINES',
      'SAMOA',
      'SAN MARINO',
      'SAO TOME AND PRINCIPE',
      'SAUDI ARABIA',
      'SENEGAL',
      'SERBIA',
      'SEYCHELLES',
      'SIERRA LEONE',
      'SINGAPORE',
      'SLOVAKIA',
      'SLOVENIA',
      'SOLOMON ISLANDS',
      'SOMALIA',
      'SOUTH AFRICA',
      'SOUTH SUDAN',
      'SPAIN',
      'SRI LANKA',
      'SUDAN (THE)',
      'SURINAME',
      'SWEDEN',
      'SWITZERLAND',
      'SYRIAN ARAB REPUBLIC (THE)',
      'TAJIKISTAN',
      'TANZANIA, UNITED REPUBLIC OF',
      'THAILAND',
      'TIMOR-LESTE',
      'TOGO',
      'TONGA',
      'TRINIDAD AND TOBAGO',
      'TUNISIA',
      'TURKEY',
      'TURKMENISTAN',
      'TUVALU',
      'UGANDA',
      'UKRAINE',
      'UNITED ARAB EMIRATES (THE)',
      'UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)',
      'UNITED STATES OF AMERICA (THE)',
      'URUGUAY',
      'UZBEKISTAN',
      'VANUATU',
      'VENEZUELA (BOLIVARIAN REPUBLIC OF)',
      'VIET NAM',
      'YEMEN',
      'ZAMBIA',
      'ZIMBABWE',
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
      factoryType: Enums.ContractSizeFactoryType;
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
