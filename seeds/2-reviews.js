exports.seed = function (knex, Promise) {
  return knex('reviews').insert([
    { id: 1,
      name: 'Bunta',
      comment: 'this is good',
      // roomio: true,
      timeStamp: null,
      dealers_id: 99901
    }

  ])
}
