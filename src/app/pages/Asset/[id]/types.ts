export const AssetTab = ['LOTS', 'DESCRIPTION', 'FAQ'] as const;
export type AssetTab = (typeof AssetTab)[number];
