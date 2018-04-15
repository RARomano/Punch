export default [
  { path: '/', meta: { requireLogin: false, class: 'glyphicon-home' }, name: 'MENU.HOME' },

  {
    path: '/admin', meta: { requireAdmin: true, hideMenu: true, class: 'glyphicon-user' }, name: 'MENU.ADMIN', children: [
      { path: '/admin/posts', meta: { requireAdmin: true, class: 'glyphicon-user' }, name: 'MENU.ADMIN.POSTS' },
      { path: '/admin/categories', meta: { requireAdmin: true, class: 'glyphicon-list' }, name: 'MENU.ADMIN.CATEGORIES' },
      { path: '/admin/tags', meta: { requireAdmin: true, class: 'glyphicon-list' }, name: 'MENU.ADMIN.TAGS' },
    ]
  },
];