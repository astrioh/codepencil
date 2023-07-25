import { API_URL } from '@/config';
import storage from '@/utils/storage';
import Axios from 'axios';

const accessToken = storage.getTokens().accessToken;

console.log(API_URL);
export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    Accept: 'application/json',
  },
});
