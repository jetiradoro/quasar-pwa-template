import {api} from 'boot/axios'

export const hideSuccessToast = async (context) => {
  setTimeout(() => {
    context.commit('hideSuccess')
  }, 3000)
}

export const hideErrorToast = async (context) => {
  setTimeout(() => {
    context.commit('hideErrorToast')
  }, 3000)
}
