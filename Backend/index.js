require('dotenv').config()
const express = require('express')
const server = express()
const connection = require('./db')
const userController = require("./routes/user.routes")
const cors = require('cors')
const blogController = require('./routes/blog.routes')
server.use(express.json())
server.use(cors())

server.use("/user", userController)
server.use('/blog', blogController)

server.listen(process.env.PORT, async ()=>{
    try {
        await connection
        console.log('db connected')
    } catch (error) {
        console.log("error in connecting db")
        console.log(error)
    }
})
