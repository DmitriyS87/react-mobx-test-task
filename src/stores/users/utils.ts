import api from '../../services/api';
import { ParamsObject } from './utils.inteface';

const makeParamsString = (params: ParamsObject) =>
  Object.keys(params)
    .map(name => `${name}=${params[name]}`)
    .join('&');

export const getUsers = (params: ParamsObject) =>
  params ? api.get(`users?${makeParamsString(params)}`) : api.get('users');

export const getUser = (id: string | number) => api.get(`users/${id}`);
