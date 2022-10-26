import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { registerStore } from './store';

import '@/assets/scss/index.scss';

const app = createApp(App);

// 注册状态仓库
app.use(createPinia());
registerStore();

app.use(router);

app.mount('#app');
