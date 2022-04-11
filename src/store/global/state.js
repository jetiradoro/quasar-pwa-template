export default function () {
  return {
    title: '',
    loading: false,
    error: {
      show: false,
      title: '',
      message: '',
      errors: [],
    },
    success: {
      show: false,
      message: '',
    },
    confirm: {
      show: false,
      message: '',
      callback: {
        commit: null,
        dispatch: null,
        payload: null,
      },
    },
  }
}
