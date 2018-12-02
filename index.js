const express = require('express');
const app = express()
const port = process.env.PORT || 4005


app.get('/', (req, res) => {
    res.send("this is a server")
    
})

app.listen(port, () => console.log(`listening on port ${port}`))