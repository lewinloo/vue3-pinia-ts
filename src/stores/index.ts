import { initResetFun } from '@/utils/storeTools';
import { useAppStore } from './app';
import { useCounterStore } from './counter';
import { useUserStore } from './user';

export interface IAppStore {
  useCounterStore: ReturnType<typeof useCounterStore>;
  useUserStore: ReturnType<typeof useUserStore>;
  useAppStore: ReturnType<typeof useAppStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useCounterStore = useCounterStore();
  appStore.useUserStore = useUserStore();
  appStore.useAppStore = useAppStore();

  // 重写reset方法
  initResetFun(appStore);
};

export default appStore;
