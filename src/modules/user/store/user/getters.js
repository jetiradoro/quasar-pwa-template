/*
export function someGetter (state) {
}
*/

export const getToken = (state) => {
  return state.token
}

export const getUserData = (state) => {
  return state.attributes
}
