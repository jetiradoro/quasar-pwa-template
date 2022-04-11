/*
export function someAction (context) {
}
*/
import {api} from 'boot/axios'

export function getUser (context){
  context.commit('global/setLoading', true, {root: true})
  api.get('http://mcl.loc/api/v1/user').then(response => {
    context.commit('global/setLoading', false, {root: true})
    console.log(response)
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
