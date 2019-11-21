exports.seed = function (knex, Promise) {
  return knex('dealers').del()
    .then(function () {
      return knex('dealers').insert([
        { id: 99901,
          firstName: 'Aacinda',
          lastName: 'Jrdern',
          strainType: 'Indica',
          strainName: 'Wabour',
          cost: '200',
          photo: '/images/Jacinda.jpg',
          description: 'dankest kush out' },

        { id: 99902,
          firstName: 'billbo',
          lastName: 'baggins',
          strainType: 'Hybrid',
          strainName: 'My Precious',
          cost: '20000',
          photo: '/images/Bilbo.jpg',
          description: 'One to rule them all' },

        { id: 99903,
          firstName: 'Kai',
          lastName: 'Nine',
          strainType: 'Staiva',
          strainName: 'Mahi Dog',
          cost: '10',
          photo: '/images/Kai.jpg',
          description: 'Smoke upon the Devils Lettuce' }

      ])
    })
}
