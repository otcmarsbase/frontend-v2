import { IRpcClientAdapter } from '@packages/berish-rpc-client';
import { AxiosInstance } from 'axios';

export function RpcClientAxiosAdapter(axiosClient: AxiosInstance): IRpcClientAdapter {
  return {
    send: async (request) => {
      const axiosResponse = await axiosClient.request({
        data: request,
        method: 'POST',
      });
      return axiosResponse.data;
    },
  };
}
