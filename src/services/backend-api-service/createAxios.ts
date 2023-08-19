import axios, { AxiosInstance } from 'axios';
import { BackendApiService } from './service';

export function createAxios(service: BackendApiService) {
  const {
    params: { baseURL },
  } = service;
  return axios.create({ baseURL });
}

export type { AxiosInstance };
