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
        {
          name: "apple", 
          quantity: 6, 
          category: "fruit",
          flavor: "sweet"
        },
        {
          name: "rice", 
          quantity: 4, 
          category: "grain",
          flavor: "savory"
        },
      ]);
    });
};
