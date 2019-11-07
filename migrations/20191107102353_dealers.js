exports.up = function (knex, Promise) {
  return knex.schema.createTable('dealers', function (table) {
    table.increments('id').primary()
    table.string('firstName')
    table.string('lastName')
    table.string('strainType')
    table.string('strainName')
    table.string('cost')
    table.string('photo')
    table.text('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dealers')
}
