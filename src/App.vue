<script setup lang="ts">
import { RouterView } from 'vue-router';
import { darkTheme, NConfigProvider } from 'naive-ui';
import appStore from './stores';
import { storeToRefs } from 'pinia';

const store = appStore.useAppStore;
const { theme } = storeToRefs(store);
</script>

<template>
  <NConfigProvider
    :theme="theme === 'dark' ? darkTheme : null"
    class="n-config"
  >
    <RouterView />
  </NConfigProvider>
</template>

<style scoped lang="scss">
.n-config {
  height: 100%;
}
</style>
