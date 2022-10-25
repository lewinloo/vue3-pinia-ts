import router from '@/router';
import { clearStorage, getToken } from '@/utils/storage';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref(getToken());
  const isLogin = computed(() => !!token.value);

  const logout = () => {
    token.value = null;
    clearStorage();
    router.push('/login');
  };

  return {
    token,
    isLogin,
    logout
  };
});
