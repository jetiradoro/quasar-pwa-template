import { Store } from "src/store";

export const auth = (to, from, next) => {
  const token = Store.getters["user/getToken"];
  if (!token) {
    return next("/login");
  }
  return next();
};

/**
 * Auth user no entry in login page
 * @param to
 * @param from
 * @param next
 * @returns {*}
 */
export const guest = (to, from, next) => {
  const token = Store.getters["user/getToken"];
  if (token) {
    return next("/");
  }
  return next();
};
