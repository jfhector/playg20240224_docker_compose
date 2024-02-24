const express = require('express')
const app = express()
const frontEndServerPort = 3000
const backEndServerPort = 4000

app.get('/', (req, res) => {
  fetch(`http://localhost:${backEndServerPort}/`).then(
    response => {
      const responseTextPromise = response.text();
      responseTextPromise.then(
        text => res.send(text)
      )
    }
  );
})

app.listen(frontEndServerPort, () => {
  console.log(`Frontend listening on port ${frontEndServerPort}`)
})
