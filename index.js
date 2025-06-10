const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.routes.js')

const app = express()

app.use(express.json())  

app.use("/api/users", userRoutes)

app.use("/api/users",userRoutes)

app.use("/api/users/:id",userRoutes)

app.use("/api/users/:id",userRoutes)

app.use("/api/users/:id",userRoutes)

mongoose.connect("mongodb://localhost:27017/db1")
    .then(() => {
        app.listen(8000, () => console.log("server running on port 8000"))
        console.log('Connection succeeded')
    })
    .catch(() => console.log("Failed to connect to database"))

