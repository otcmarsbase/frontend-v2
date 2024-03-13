import { createContext } from 'react';

import { DeskGatewaySchema } from '@schema/desk-gateway';

export const RpcSchemaContext = createContext<DeskGatewaySchema.RPC.Client>(null);
