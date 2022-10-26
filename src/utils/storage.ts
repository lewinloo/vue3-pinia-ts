export enum STORAGE_KEY {
  TOKEN = 'token',
  TIME_STAMP = 'timeStamp',
  THEME = 'theme'
}

/**
 * 缓存数据
 * @param key
 * @param value
 */
export const setItem = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 获取缓存数据
 * @param key
 * @returns
 */
export const getItem = <T = unknown>(key: string) => {
  const result = JSON.parse(window.localStorage.getItem(key) ?? 'null');
  if (result) {
    return result as T;
  } else {
    return null;
  }
};

/**
 * 删除缓存数据
 * @param key
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

/**
 * 清空 localStorage
 */
export const clearStorage = () => {
  window.localStorage.clear();
};

/**
 * 保存token
 */
export const setToken = (token: string) => {
  setItem(STORAGE_KEY.TOKEN, token);
};

/**
 * 获取 token
 */
export const getToken = () => {
  return getItem<string>(STORAGE_KEY.TOKEN);
};

/**
 * 清除token
 */
export const clearToken = () => {
  removeItem(STORAGE_KEY.TOKEN);
};
