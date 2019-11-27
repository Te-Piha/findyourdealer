import request from 'superagent'

export function getUsers () {
  return request.get('/map')
    .then(res => {
      const users = res.body
      return users
    })
    .catch((err) => {
      // throw Error('its not working')
      console.error(err.message, 'not sure whats going on')
    })
}
