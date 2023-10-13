export namespace AssetGetStatsById {
  export type Payload = {
    id: string;
  };
  export type Result = { averageFdv: string; lotSellCount: number; lotBuyCount: number; lotSellCvSum: string; lotBuyCvSum: string };
}
