import {api} from 'boot/axios'

export const hideSuccessToast = async (context) => {
  setTimeout(() => {
    context.commit('hideSuccess')
  }, 3000)
}

