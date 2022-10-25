import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const theme = ref<'dark' | 'light'>('dark');

  const setTheme = (val: 'dark' | 'light') => {
    theme.value = val;
  };

  return {
    theme,
    setTheme
  };
});
