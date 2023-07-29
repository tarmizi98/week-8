const express = require('express')
const app = express()
const film = require('./film.js')
const category = require('./category.js')
const pool = require('./queries.js')

// app.use ('/', things)

pool.connect((err, res) =>{
    console.log(err)
    console.log('connect')
}) 

app.use('/api/films', film)
app.use('/api/category', category)
app.listen(3000)

