import axios from 'axios';
import {BASE_URI} from './pathMap';
import Toast from '../utils/Toast';
import RootStore from '../mobx/index';

const instance = axios.create({
  baseURL: BASE_URI,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 显示loading
    Toast.showLoading('请求中');
    console.log('------request config', config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 隐藏loading
    Toast.hideLoading();
    console.log('-----request response', response);
    return response.data;
  },
  function (error) {
    Toast.hideLoading();
    // 对响应错误做点什么
    console.log('----request response error', error);
    return Promise.reject(error);
  },
);

export default {
  get: instance.get,
  post: instance.post,
  // post 自动带上token
  privateGet: (url, data = {}, options = {}) => {
    const token = RootStore.token;
    const headers = options.headers || {};
    return instance.post(url, data, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
  },
  privatePost: (url, data = {}, options = {}) => {
    const token = RootStore.token;
    const headers = options.headers || {};
    return instance.post(url, data, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
  },
};
