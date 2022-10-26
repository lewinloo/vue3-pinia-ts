<template>
  <div style="height: 100%; position: relative">
    <NLayout position="absolute">
      <NLayoutHeader bordered class="header">
        <div class="logo">
          <h2>WGO-ADMIN</h2>
        </div>
        <div class="header-right">
          <theme-switch />
        </div>
      </NLayoutHeader>

      <NLayout hasSider position="absolute" style="top: 60px; bottom: 0px">
        <NLayoutSider
          bordered
          contentStyle="padding: 24px"
          collapseMode="transform"
          showTrigger
        >
          sider
        </NLayoutSider>
        <NLayout contentStyle="padding: 24px">
          <RouterView />
        </NLayout>
      </NLayout>
    </NLayout>
  </div>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutHeader, NLayoutSider } from 'naive-ui';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import { RouterView } from 'vue-router';
// import appStore from '../stores';
// import { storeToRefs } from 'pinia';
// import type { CSSProperties } from 'vue';

// const store = appStore.useAppStore;
// const { theme } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .logo {
    display: flex;
    align-items: center;
  }

  .header-right {
    display: flex;
    align-items: center;
  }
}
</style>
