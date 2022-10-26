<template>
  <NSwitch
    :on-update:value="store.setTheme"
    :value="theme"
    checked-value="light"
    unchecked-value="dark"
    :rail-style="railStyle"
  >
    <template #checked-icon>
      <n-icon :component="Sunny" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="Moon" />
    </template>
  </NSwitch>
</template>

<script lang="ts" setup>
import { NSwitch } from 'naive-ui';
import { Sunny, Moon } from '@vicons/ionicons5';
import appStore from '../store';
import { storeToRefs } from 'pinia';
import type { CSSProperties } from 'vue';

const store = appStore.useAppStore;
const { theme } = storeToRefs(store);

const railStyle = ({
  focused,
  checked
}: {
  focused: boolean;
  checked: boolean;
}) => {
  const style: CSSProperties = {};
  if (checked) {
    style.background = '#EB7A09FF';
    if (focused) {
      style.boxShadow = '0 0 0 2px #EB7A09FF';
    }
  }
  return style;
};
</script>

<style lang="scss" scoped></style>
