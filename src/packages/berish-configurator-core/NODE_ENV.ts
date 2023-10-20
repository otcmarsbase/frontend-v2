export type NODE_ENV = 'production' | 'development' | 'test';
export const NODE_ENV = (process.env.NODE_ENV as NODE_ENV) || 'development';
