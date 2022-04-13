import createPersistedState from "vuex-persistedstate";
import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import globalStore from "./global";
import userStore from "../modules/user/store/user";

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
    global: globalStore,
    user: userStore,
  },
  plugins: [createPersistedState()],

  // enable strict mode (adds overhead!)
  // for dev mode and --debug builds only
  strict: process.env.DEBUGGING,
});

export default store(function (/* { ssrContext } */) {
  return Store;
});

export { Store };
