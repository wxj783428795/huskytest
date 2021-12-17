/*
 * @Description:
 * @Author: fengzhijun
 * @Date: 2020-07-15 09:15:35
 * @LastEditors: wxj
 */
// import Cookies from 'js-cookie';
import { message } from 'antd';
import codeMessage from './status';
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
interface User {
  id: string;
  expireTime: string | null; //过期时间
  fileUrl: string; //文件资源统一根路径
  sfdl: string; //是否登录
  sfxgmm: string; //是否修改密码
  tokenStr: string; //token
  userLogin: string; //账号
  userName: string; //企业名称
  zhdlsj: string; //最后登录状态
  zt: string; //账号状态
  [propName: string]: any;
}
const info: string = localStorage.getItem(window.globalConfig.localStorageKey) || '{}';
const userinfo: User = JSON.parse(info);
const request = axios.create({
  baseURL: window.globalConfig.API_ROOT,
  // headers: { withCredentials: true },
  timeout: 5000, //How to handle interface timeout
});

const loginRequest = axios.create({
  baseURL: window.globalConfig.API_ROOT,
  headers: {
    withCredentials: 'true',
  },
  timeout: 5000, //How to handle interface timeout
});
const randomString = (len: number) => {
  len = len || 32;
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};
loginRequest.interceptors.request.use(
  (config) => {
    const ipCode = localStorage.getItem('IP_CODE');
    if (ipCode) {
      // config.headers.ipcode = ipCode;
    } else {
      const random = randomString(16);
      localStorage.setItem('IP_CODE', random);
      // config.headers.ipcode = random;
    }
    return config;
  },
  (error) => {
    errorHandler(error);
  },
);

request.interceptors.request.use(
  (config) => {
    console.log('API_TOKEN：', localStorage.getItem('API_TOKEN'));
    // 让每个请求携带token, 'token'为自定义的key

    config.headers!.token = localStorage.getItem('API_TOKEN')!;

    // console.log("头信息",tokenvalue);
    return config;
  },
  (error) => {
    errorHandler(error);
  },
);

const request_form = axios.create({
  baseURL: window.globalConfig.API_ROOT,
  timeout: 5000, //How to handle interface timeout
  // headers: {
  //     'Content-Type': 'multipart/form-data'
  // }
});

// form请求添加请求拦截器配置

request_form.interceptors.request.use(
  (config) => {
    const { data } = config;
    config.headers!.token = userinfo.tokenStr;
    const transformedData = data instanceof FormData ? data : qs.stringify(data);
    config.data = transformedData; // 转为formdata数据格式
    return config;
  },
  (error) => Promise.reject(error),
);

// 添加响应拦截器
request.interceptors.response.use(
  //错误拦截
  (response) => {
    if (response.status !== 200) {
      message.error('返回数据失败');
    }
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response) {
      if (error.response.status == 401) {
        message.error(codeMessage[error.response.status]);
        //   removeCookie(); //|| error.response.status == 429操作频繁不跳转
        setTimeout(() => {
          window.location.href = `${window.globalConfig.Root_Url}/login`;
        }, 2000);
        //弹窗重新登陆
        return Promise.reject(error);
      } else {
        message.error(codeMessage[error.response.status]);
        return Promise.reject(error);
      }
    }
    // return Promise.reject(error);
  },
);

// 异常拦截处理器
const errorHandler = (error: any) => {
  return Promise.reject(error);
};
export { request, request_form, loginRequest };
