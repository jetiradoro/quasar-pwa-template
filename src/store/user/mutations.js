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


export const destroySession = (state) => {
  state.token = null
  state.attributes = null
}
