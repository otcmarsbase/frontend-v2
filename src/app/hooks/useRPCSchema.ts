import { useRef } from 'react';

import { appManager } from '../logic';

export const useRPCSchema = () => {
  const {
    serviceManager: {
      backendApiService: { schema },
    },
  } = appManager;

  const rpcSchema = useRef<typeof schema>(schema);

  return rpcSchema.current;
};
