import { IRpcClientAdapter } from '@packages/berish-rpc-client';
import { AxiosInstance } from 'axios';

export function RpcClientAxiosAdapter(axiosClient: AxiosInstance): IRpcClientAdapter {
  return {
    send: async (request) => {
      const { method, ...body } = request;
      const axiosResponse = await axiosClient.request({
        data: body,
        url: method,
        method: 'POST',
      });
      return axiosResponse.data;
    },
  };
}
