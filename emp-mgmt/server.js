const express = require ('express')
require('dotenv').config()
const empRoute = require('./routes/empRoute')
const app = express()

const  port = process.env.PORT || 5003

app.get('/', (req,res)=>{
    res.send("Server is started")
})

//middleware
app.use(express.json())

app.use('/emp', empRoute)


app.listen(port, () => {
    console.log(`Server running on http:localhost:${port}`)
})