
module.exports = {

    development: {
      client: 'pg',
      connection:
        'postgresql://localhost/food_blog'
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  
  };