import request from 'superagent'

export function getUsers () {
  return request.get('/#/map')
    .then(res => {
      const user = res.body
      return user
    })
    .catch(() => {
      throw Error('its fucked')
    })
}
