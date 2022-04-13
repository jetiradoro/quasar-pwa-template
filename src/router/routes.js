import {auth} from 'src/modules/user/middlewares/authMiddleware'
import userRouter from 'src/modules/user/routes'

const routes = [
	userRouter.login,

	{
		path: '/',
		beforeEnter: auth,
		component: () => import('pages/EntryPage.vue'),
		name: 'entry',
	},

	{
		path: '/app',
		beforeEnter: auth,
		component: () => import('layouts/AppLayout.vue'),
		name: 'app',
		children: [],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/Error404.vue'),
	},
]

export default routes
