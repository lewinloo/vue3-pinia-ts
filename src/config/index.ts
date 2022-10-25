const env = (import.meta.env.MODE || 'production') as
  | 'development'
  | 'production'
  | 'test';

const EnvConfig = {
  development: {
    baseApi: import.meta.env.VITE_API_URL
  },
  test: {
    baseApi: 'xxx'
  },
  production: {
    baseApi: 'xxx'
  }
};

export default {
  env,
  namespace: 'manager',
  ...EnvConfig[env]
};
