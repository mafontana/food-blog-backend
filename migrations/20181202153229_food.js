exports.up = function(knex, Promise) {
    return knex.schema.createTable('food_list', (food) => {
        food.increments('id')
        food.string('name')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('food_list')
};