import { auth, guest } from "src/modules/user/middlewares/authMiddleware";

export default {
  login: {
    path: "/login",
    beforeEnter: guest,
    component: () => import("../pages/Login.vue"),
    name: "login",
  },
};
