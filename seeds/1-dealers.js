exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('dealers').insert([
        { id: 99901,
          firstName: 'Aacinda',
          lastName: 'Jrdern',
          strainType: 'Indica',
          strainName: 'Wabour',
          cost: '200',
          photo: 'images/Aacinda-Jrdern.jpeg',
          description: 'dankest kush out' },

        { id: 99902,
          firstName: 'billbo',
          lastName: 'baggins',
          strainType: 'Hybrid',
          strainName: 'My Precious',
          cost: '20000',
          photo: 'images/Aacinda-Jrdern.jpeg',
          description: 'aye ets go' },

        { id: 99903,
          firstName: 'Kai',
          lastName: 'Nine',
          strainType: 'Staiva',
          strainName: 'Mahi Dog',
          cost: '10',
          photo: 'images/Aacinda-Jrdern.jpeg',
          description: 'we out here' }

      ])
    })
}
