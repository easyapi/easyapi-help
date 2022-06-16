/**
 * 路由的配置数据
 * */
const getRoutes = resolve => [
  {
    path: '/video',
    name: 'video',
    component: resolve('pages/video'),
    chunkName: 'pages/video',
  }
];

// 导出
export default getRoutes;
