/* eslint-disable no-param-reassign */
import axios from 'axios';
import { ApiConstant } from '@constants';

const api = axios.create({
  timeout: 10000,
  baseURL: ApiConstant.API_BASE_URL
});

api.interceptors.request.use(config => {
  if (process.env.API_ACCESS_TOKEN) {
    config.headers.Authorization = `Bearer ${process.env.API_ACCESS_TOKEN}`;
  }

  return config;
});

export default api;
