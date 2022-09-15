export const API = (ipVersion) => {
  return fetch(ipVersion)
    .then((response) => {
      if (response) {
        console.log('Success')
        return response.json()
      }
      throw response
    })
    .then((data) => {
      return data.ip
    })
    .catch(() => {
      console.error('Failed')
    })
}
