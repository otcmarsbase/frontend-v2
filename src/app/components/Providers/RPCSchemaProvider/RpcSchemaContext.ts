import { createContext } from 'react';

import { RPC } from '@schema/otc-desk-gateway';

export const RpcSchemaContext = createContext<RPC.Client>(null);
