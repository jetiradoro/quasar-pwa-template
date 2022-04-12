import {api} from 'boot/axios'
import config from 'src/config'

export const authUser = async (context, payload) => {
  context.commit('global/setLoading', true, {root: true})
  api.get(`${config.api_host}/get-token`, {
    auth: {
      username: payload.username,
      password: payload.password
    }
  }).then(response => {
    context.commit('global/setLoading', false, {root: true})
    context.commit('setToken', response.data)
    context.dispatch('getUser')
  }).catch(error => {
    context.commit('global/setLoading', false, {root: true})
    context.commit(
      'global/setError',
      {
        title: 'Fail getting user',
        message: error.response.data.message,
      },
      {root: true}
    )
  })
}


export const getUser = async (context) => {
  context.commit('global/setLoading', true, {root: true})
  api.get(`${config.api_host}/user`, {
    headers: {Authorization: `Bearer ${context.state.token}`}
  }).then(response => {
    context.commit('global/setLoading', false, {root: true})
    context.commit('setUser', response.data)
    // router.push('entry')
  }).catch(error => {
    context.commit('global/setLoading', false, {root: true})
    context.commit(
      'global/setError',
      {
        title: 'Fail getting user',
        message: error.response.data.message,
      },
      {root: true}
    )
  })
}
