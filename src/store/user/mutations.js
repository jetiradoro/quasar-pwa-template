/*
export function someMutation (state) {
}
*/

export const setToken= (state,token) => {
  state.token = token
}

export const setUser = (state,payload) => {
  state.attributes = payload
}
