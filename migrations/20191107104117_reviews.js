exports.up = function (knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('comment')
    // table.boolean('roomio')
    table.timestamp('timeStamp').defaultTo(knex.fn.now())
    table.integer('dealers_id')
      .references('dealers.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
