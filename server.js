import bodyParser from 'body-parser'
const express = require('express')
const axios = require('axios')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/test', (req, res) => {
  res.send({ data: 'data from the server!' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))