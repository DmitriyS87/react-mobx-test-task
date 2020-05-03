import axios from 'axios';
import { API_BASE_URL } from './constants';

const api = axios.create({
  timeout: 10000,
  baseURL: API_BASE_URL
});

api.interceptors.request.use(request => {
  if (process.env.API_ACCESS_TOKEN) {
    request.headers.Authorization = `Bearer ${process.env.API_ACCESS_TOKEN}`;
  }

  return request;
});

export default api;
