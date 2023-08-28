import { ReactNode } from 'react';

export interface IPublishLot {
  onPublishLot: () => void;
  children: ReactNode;
  isActive: boolean;
}
