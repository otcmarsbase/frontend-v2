import { useRef } from 'react';

import { appManager } from '../logic';

export const useRPCSchema = () => {
  const {
    serviceManager: {
      backendApiService: { schema: backendSchema },
    },
  } = appManager;

  const rpcSchema = useRef<typeof backendSchema>(backendSchema);

  return rpcSchema.current;
};
