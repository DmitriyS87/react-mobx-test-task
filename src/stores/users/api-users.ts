import { Params } from '@types';
import api from '../../core/api';

const makeParamsString = (params: Params) =>
  Object.keys(params)
    .map(name => `${name}=${params[name]}`)
    .join('&');

export const getUsers = (params?: Params) => (params ? api.get(`users?${makeParamsString(params)}`) : api.get('users'));

export const getUser = (id: string | number) => api.get(`users/${id}`);
