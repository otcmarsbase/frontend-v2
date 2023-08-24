import { AxiosInstance } from 'axios';
import { IRpcClientAdapter } from 'src/packages/berish-rpc-client';

export function RpcClientAxiosAdapter(
  axiosClient: AxiosInstance,
): IRpcClientAdapter {
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
