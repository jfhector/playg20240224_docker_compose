const express = require('express')
const app = express()
const frontEndServerPort = 3000
const backEndServerPort = 4000

app.get('/', (req, res) => {
  // If backend running
  fetch(`http://host.docker.internal:${backEndServerPort}/`).then( // host.docker.internal rather than localhost, when a docker service accesses another service via the docker network
    response => {
      const responseTextPromise = response.text();
      responseTextPromise.then(
        text => res.send(text)
      )
    }
  );

  // If backend not running
  // res.send("Hello from FE")
})

app.listen(frontEndServerPort, () => {
  console.log(`Frontend listening on port ${frontEndServerPort}`)
})
