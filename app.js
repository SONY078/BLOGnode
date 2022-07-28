const express = require ("express")
const app = express()
const DataRouter = require("./Routes/Data")
const cors = require("cors")
app.use(cors())
app.use("/api",DataRouter)

const port = process.env.PORT||8080
app.listen(port,function () {
    console.log('Application is Running')
})





