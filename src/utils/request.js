import Taro from '@tarojs/taro';
import qs from 'qs';

const BASE_URL = ''

/**
 * 请求成功处理
 * @param {*} data
 * @param {*} resolve
 */
const checkSuccess = (res, resolve) => {
  let { statusCode, data } = res;
  if (statusCode >= 200 && statusCode < 300) {
    Taro.hideNavigationBarLoading();
    return resolve(data);
  } else {
    throw new Error(`网络请求错误，状态码${statusCode}`);
  }
};

/**
 * 请求错误处理
 * @param {*} error
 * @param {*} reject
 */
const throwError = (error, reject) => {
  Taro.hideNavigationBarLoading();
  if (typeof error === 'object') {
    reject(error);
    throw new Error('请求失败:', error.errMsg);
  }
  throw error;
};

export default {
  request(options, method = 'GET') {
    const { url } = options;
    return new Promise((resolve, reject) => {
      // 显示导航条加载动画
      Taro.showNavigationBarLoading();
      Taro.request({
        ...options,
        method: method,
        url: `${BASE_URL}${url}`,
        header: {
          'content-type': 'application/json', //默认值
          ...options.header
        }
      })
        .then(res => {
          checkSuccess(res, resolve);
        })
        .catch(err => {
          throwError(err, reject);
        });
    });
  },
  get(options) {
    return this.request({
      ...options
    });
  },
  post(options) {
    return this.request(
      {
        ...options,
        data: qs.stringify(options.data)
      },
      'POST'
    );
  }
};
