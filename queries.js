const db = require('./database-connection')

module.exports = {
    listAll(){
        return db('food_list')
    },
    getById(id) {
        return db('food_list').where('id', id)
    }, 
  
}