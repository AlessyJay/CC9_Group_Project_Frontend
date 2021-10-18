import axios from 'axios';
import { API_URL } from './env';

import { getToken, removeToken } from '../services/localStorage';
axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${getToken()}`;
    return config;
  },
  (err) => Promise.reject.err
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      removeToken();
      //   window.location.reload();
      window.location.replace('/login');
      return;
    }
    return Promise.reject(err);
  }
);
export default axios;
