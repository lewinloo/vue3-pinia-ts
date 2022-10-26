import { IMenuItem } from '@/typings';

export const menuData: IMenuItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    title: '首页',
    path: '/dashboard',
    parentId: 0,
    componentFilePath: 'views/dashboard/index.vue',
    sort: 1,
    enable: true,
    hidden: false,
    keepAlive: false,
    breadcrumb: true
  },
  {
    id: 2,
    name: 'System',
    title: '系统管理',
    path: '/system',
    parentId: 0,
    componentFilePath: '',
    sort: 2,
    enable: true,
    hidden: false,
    keepAlive: false,
    breadcrumb: false
  },
  {
    id: 3,
    name: 'Users',
    title: '用户管理',
    path: '/system/users',
    parentId: 2,
    componentFilePath: 'views/system/users/index.vue',
    sort: 1,
    enable: true,
    hidden: false,
    keepAlive: false,
    breadcrumb: true
  },
  {
    id: 4,
    name: 'Menus',
    title: '菜单管理',
    path: '/system/menus',
    parentId: 2,
    componentFilePath: 'views/system/menus/index.vue',
    sort: 2,
    enable: true,
    hidden: false,
    keepAlive: false,
    breadcrumb: true
  }
];
