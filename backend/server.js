const express = require("express")
const mongoose = require("mongoose")
const rentRouter = require("./router/rentRouter")
const cors = require("cors")
const adminRouter = require("./router/adminRouter")

const app = express()
app.use(express.json())
app.use(cors())

// rent router
app.use(rentRouter)

// admin router
app.use(adminRouter)

// custome routes for only documents
app.use("/alldocs", express.static("documents"))

mongoose.connect("mongodb://localhost:27017/RentInformation").then(() => {
    console.log("Database has been connected")
}).catch((error) => console.log(error))



app.listen(5000, () => console.log("server is running on port 5000"))