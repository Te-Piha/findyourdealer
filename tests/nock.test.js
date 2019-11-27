const nock = require('nock')
const getRandomFact = require('../client/api/foodFact').default
const internal = require('../client/api/index')

describe('Testing API', () => {
  const factUrl = 'https://uselessfacts.jsph.pl'
  const userUrl = 'https://localhost:3000'

  it('gets a random fact', () => {
    // Arrange
    const expected = {
      id: 'randomid',
      text: 'Test fact',
      source: 'djtech.net',
      source_url: 'test.com',
      language: 'en',
      permalink: 'www.test.com'
    }

    nock(factUrl)
      .get('/random.json?language=en')
      .reply(200, expected)

    // Act
    return getRandomFact()
      .then(response => {
        // Assert
        expect(response.status).toBe(200)
        // expect(response.header['content-type']).toMatch('json')
        expect(response.body).toEqual(expected)
      })
  })

  it('gets user', () => {
    // Arrange
    const expected = { id: 1,
      firstName: 'FirstName',
      lastName: 'LastName',
      strainType: 'Test',
      strainName: 'TestStrain',
      cost: 'monies',
      photo: '/images/Jacinda.jpg',
      description: 'dankest kush out' }

    nock(userUrl)
      .get('/map')
      .reply(200, expected)
    // Act
    return internal.getUsers()
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(expected)
      })
    // Assert
  })
})
