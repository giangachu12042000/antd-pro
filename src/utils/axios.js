import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://609e8bb033eed80017958c59.mockapi.io/',
  timeout: 5000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default instance;
