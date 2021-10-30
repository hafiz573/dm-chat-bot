
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Dm chat bot made by https://github.com/hafiz573')
})

app.listen(port, () => {
  console.log(`Ready To host at : ${port}`)
})
