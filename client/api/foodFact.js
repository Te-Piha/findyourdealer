import request from 'superagent'

const factUrl = 'https://uselessfacts.jsph.pl/random.json?language=en'

export default function getRandomFact () {
  return request.get(factUrl)
}
