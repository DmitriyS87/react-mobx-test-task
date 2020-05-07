import { Params } from '@types';
import api from '../../core/api';

const makeParamsString = (params: Params) =>
  Object.keys(params)
    .map(name => `${name}=${params[name]}`)
    .join('&');

export const getUserPosts = (params: Params) => api.get(`posts?${makeParamsString(params)}`);
