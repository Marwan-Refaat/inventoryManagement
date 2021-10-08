const express = require('express');
require('./db/mongoose')
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello, world!")
})

app.listen(port, () => {
    console.log('Server is up on port ', port)
})