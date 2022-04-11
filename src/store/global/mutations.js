export function setTitle(state, value) {
  state.title = value
}

export function setLoading(state, enable) {
  state.loading = enable
}

export function setError(state, payload) {
  state.error = {
    show: true,
    title: payload.title,
    message: payload.message,
    errors: payload.errors,
  }
}

export function removeError(state) {
  state.error = {
    show: false,
    title: '',
    message: '',
    errors: [],
  }
}

export function showSuccess(state, payload) {
  state.success = {
    show: true,
    message: payload.message,
  }
}

export function hideSuccess(state) {
  state.success = {
    show: false,
    message: '',
  }
}

export function setConfirm(state, payload) {
  state.confirm = {
    show: true,
    message: payload.message,
    callback: payload.callback,
  }
}

export function removeConfirm(state) {
  state.confirm = {
    show: false,
    message: '',
    callback: {
      commit: null,
      dispatch: null,
      payload: null,
    },
  }
}
