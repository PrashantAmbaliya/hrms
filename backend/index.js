const express = require('express')
const corse = require('cors')

// Routes
const User = require('./routes/userRouter')
const TimeLog = require('./routes/timelogRouter')

const app = express()
const PORT = 8080

app.use(corse())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user', User)
app.use('/timelog', TimeLog)

app.listen(PORT, () => console.log(`Server Is Listning on Port:${PORT}`))