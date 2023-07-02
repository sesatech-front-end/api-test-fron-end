const express = require('express')
const cors = require('cors')
const port = 8000

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: 'http://localhost:8080' }))

const Routes = require('./routes/Routes')
app.use('/', Routes)

app.listen(port, () => {
  console.log(`Server rodando na porta:${port}`)
})
