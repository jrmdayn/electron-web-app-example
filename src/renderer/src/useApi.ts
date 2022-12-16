type Api = Window['api']

const mockedApi: Api = {
  open: async () => {
    window.alert('This API is disabled in the web version')
  }
}

export const useApi = (): Api => {
  if (window?.api != null) {
    return window.api
  }
  return mockedApi
}
