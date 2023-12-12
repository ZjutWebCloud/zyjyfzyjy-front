import axios from 'axios';
import qs from 'qs';
import context from '@/context';

const instance = axios.create({
  baseURL: context,
});

instance.interceptors.request.use(
  function(config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    if (config.data && typeof config.data === 'object') {
      config.data = qs.stringify(config.data);
    }
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const getMenus = async () => {
  return (await instance.get(`/jsonfile/index/frontclass.json?t=${Date.now()}`)).frontClass;
};

export const getMainData = async () => {
  return await instance.get(`/jsonfile/index/index.json?t=${Date.now()}`);
};

export const getNewsDetail = async hashcode => {
  return (await instance.get(`/jsonfile/news/${hashcode}.json?t=${Date.now()}`)).output;
};

export const searchList = async parmas => {
  return await instance.post('/BrowseFuzzy.adub', parmas);
};

export const getNormalList = async params => {
  return await instance.post('/BrowseFuzzy.adub', params);
};

export const getBasicData = async params => {
  return (await instance.post('/QueryBasic.adub', params)).output;
};
