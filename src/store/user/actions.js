import {api} from 'boot/axios'

export const authUser = async (context) => {
  context.commit('global/setLoading', true, {root: true})
  api.get('http://mcl.loc/api/v1/get-token', {
    auth: {
      username: 'innovait@innovait.cat',
      password: 'secret'
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
  api.get('http://mcl.loc/api/v1/user', {
    headers: { Authorization: `Bearer ${context.state.token}` }
  }).then(response => {
    context.commit('global/setLoading', false, {root: true})
    context.commit('setUser', response.data)
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
