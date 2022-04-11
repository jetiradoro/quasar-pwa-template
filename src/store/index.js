import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import counterStore from './counter'
import globalStore from './global'
import userStore from './user'


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
const Store = createStore({
  modules: {
    counter: counterStore,
    global: globalStore,
    user: userStore
  },

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING,
})

export default store(function (/* { ssrContext } */) {
  return Store
})

export {Store}
