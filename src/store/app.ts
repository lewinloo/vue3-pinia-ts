import { getItem, setItem, STORAGE_KEY } from '@/utils/storage';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const theme = ref<'dark' | 'light'>(getItem(STORAGE_KEY.THEME) || 'dark');

  const setTheme = (val: 'dark' | 'light') => {
    theme.value = val;
    setItem(STORAGE_KEY.THEME, val);
  };

  return {
    theme,
    setTheme
  };
});
