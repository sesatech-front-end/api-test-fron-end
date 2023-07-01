const express = require('express')
const cors = require('cors')
const port = 8000

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

const UsersRoutes = require('./routes/UserRoutes')
app.use('/', UsersRoutes)

app.listen(port, () => {
  console.log(`Server rodando na porta:${port}`)
})
