import { Dashboard } from '@shared/types';

import { OffersMock } from './mock';

export interface MockRequestPayload {
  search?: string;
}

export async function mockRequest(
  payload: MockRequestPayload,
): Promise<Dashboard.OfferItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return OffersMock;
}
