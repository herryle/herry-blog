const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./config/db')(app)
require('./routes/category')(app)
require('./routes/article')(app)
require('./routes/ad')(app)
require('./routes/user')(app)

app.listen('3001', () => {
  console.log('http://localhost:3001/')
})
