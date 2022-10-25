import { TOKEN_TIMEOUT_VALUE } from '@/constant';
import { getItem, setItem, STORAGE_KEY } from './storage';

/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getItem<number>(STORAGE_KEY.TIME_STAMP);
}

/**
 * 设置时间戳
 */
export function setTimeStamp() {
  setItem(STORAGE_KEY.TIME_STAMP, Date.now());
}

/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now();
  // 缓存时间
  const bufferTime = getTimeStamp();

  return currentTime - (bufferTime ?? 0) > TOKEN_TIMEOUT_VALUE;
}
