const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors');

const todoRouter = require('./routes/todo')

app.use(express.json())
app.use(cors());

app.use('/api/todo', todoRouter)

app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`)

)