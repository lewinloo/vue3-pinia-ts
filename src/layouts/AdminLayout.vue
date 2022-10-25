<template>
  <div style="height: 100%; position: relative">
    <NLayout position="absolute">
      <NLayoutHeader bordered style="height: 60px; padding: 20px">
        header
        <NSwitch
          :on-update:value="store.setTheme"
          :value="theme"
          checked-value="light"
          unchecked-value="dark"
        >
          <template #checked-icon>
            <n-icon :component="Sunny" />
          </template>
          <template #unchecked-icon>
            <n-icon :component="Moon" />
          </template>
        </NSwitch>
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
import { NLayout, NLayoutHeader, NLayoutSider, NSwitch } from 'naive-ui';
import { RouterView } from 'vue-router';
import { Sunny, Moon } from '@vicons/ionicons5';
import appStore from '../stores';
import { storeToRefs } from 'pinia';

const store = appStore.useAppStore;
const { theme } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
