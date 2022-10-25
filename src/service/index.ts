import axios, { type AxiosRequestConfig } from 'axios';
import type { AxiosResponse } from 'axios';
import type { IBaseResponse } from '@/typings';
import config from '@/config';
import { getToken } from '@/utils/storage';
import { isCheckTimeout } from '@/utils/auth';
import { useUserStore } from '@/stores/user';

const user = useUserStore();

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

service.interceptors.request.use(
  (config) => {
    const headers: AxiosRequestConfig['headers'] = {};
    const token = getToken();
    if (token) {
      // 主动设置 token 失效时间
      if (isCheckTimeout()) {
        // 退出操作
        user.logout();
        return Promise.reject(new Error('token 失效'));
      }
      headers.Authorization = token;
    }
    config.headers = headers;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截
service.interceptors.response.use(
  (res: AxiosResponse<IBaseResponse>) => {
    const { success, message } = res.data;
    if (success) {
      return res;
    } else {
      // 显示错误消息
      // message.error()
      return Promise.reject(new Error(message));
    }
  },
  (err) => {
    // token 超时（通过后端通知的token失效）
    if (err.response && err.response.data && err.response.data.code === 401) {
      user.logout();
    }
    // 显示错误消息
    // message.error()
    return Promise.reject(err);
  }
);

interface Http {
  get<T>(url: string, params?: unknown): Promise<IBaseResponse<T>>;
  post<T>(url: string, params?: unknown): Promise<IBaseResponse<T>>;
  put<T>(url: string, params?: unknown): Promise<IBaseResponse<T>>;
  delete<T>(url: string, params?: unknown): Promise<IBaseResponse<T>>;
  upload<T>(url: string, params: unknown): Promise<IBaseResponse<T>>;
  download(url: string): void;
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      service
        .put(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      service
        .delete(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      service
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  }
};

export default http;
