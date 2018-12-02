const express = require('express');
const app = express()
const queries = require('./queries')
const port = process.env.PORT || 4005


app.get('/', (req, res) => {
    queries.listAll().then(food => res.send(food))
    
})

app.listen(port, () => console.log(`listening on port ${port}`))