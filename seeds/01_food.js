exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_list').insert([
        {
          name: "avocado", 
          quantity: 2, 
          category: "fruit",
          flavor: "savory"
        },
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
