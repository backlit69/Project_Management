const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config({path:(__dirname.slice(0,__dirname.split().length-1))+'config.env'})

require('./database/connection')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(require('./routes/root'))

app.listen(process.env.PORT,()=>{
    console.log('Server started at port',process.env.PORT)
})

