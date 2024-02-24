const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World from back-end server!')
})

app.listen(port, () => {
  console.log(`Frontend listening on port ${port}`)
})
