export default [
  {
    path: '/',
    component: () => import('@/app/views/HomeView.vue'),
  },
  {
    path: '/nested-contexts',
    component: () => import('@/app/views/nested-contexts/NestedViewsView.vue'),
    children: [
      {
        path: ':groupId',
        component: () => import('@/app/views/nested-contexts/GroupContextView.vue'),
        children: [
          {
            path: ':userId',
            component: () => import('@/app/views/nested-contexts/UserContextView.vue'),
            children: [
              {
                path: ':messageId',
                component: () => import('@/app/views/nested-contexts/MessageContextView.vue'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/enhanced-data',
    component: () => import('@/app/views/enhanced-data/EnhancedDataView.vue'),
  },
];
