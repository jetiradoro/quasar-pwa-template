import {auth,guest} from 'src/middlewares/authMiddleware'
const routes = [
  {
    path: '/login',
    beforeEnter: guest,
    component: () => import('pages/Login.vue'),
    name: 'login',
  },
  {
    path: "/",
    beforeEnter: auth,
    component: () => import("pages/EntryPage.vue"),
    name: 'entry'
  },

  {
    path: '/app',
    beforeEnter: auth,
    component: () => import('layouts/AppLayout.vue'),
    name: 'app',
    children:[

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
]

export default routes
