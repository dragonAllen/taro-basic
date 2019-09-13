import api from './request';

// mock数据
export function getMockData() {
  return api.get({
    url: 'https://www.easy-mock.com/mock/5d7818e6de000b4421146dc6/example/axiosTest'
  });
}
