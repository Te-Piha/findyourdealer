import request from 'superagent'

export function getUsers () {
  return request.get('/map')
    .then(res => {
      const users = res.body
      return users
    })
    .catch(() => {
      throw Error('its fucked')
    })
}
