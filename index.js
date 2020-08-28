const express = require('express')
const app = express()

const page = `<html>
<head>
  <title>Alena Izakson</title>
</head>

<body>
  <h1>If your boss is getting you down,</h1>
  <p>look at him through the prongs of a fork and imagine him in jail.</p>
  <p>Ricky Gervais</p>
</body>
</html>`



app.get(
    '/',
    (request, response) => { 
    response.send(page)
    }
)

const port = process.env.PORT || 8900

  
  app.listen(
    port,
    () => console.log(`Listening on :${port}`)
  )

