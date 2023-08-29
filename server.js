const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config();

app.use(express.json())// Adds json payload to body
app.use(morgan('dev'))// moniter requests

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`connected to Mongo Db`))
    .catch(err => console.log(err))

// Routes
app.use("/api/", require("./routes/petRouter"))

// Error handling
app.use((err, req, res, next) => {
   return res.status(404).send({errorMessage: err.message})
})


app.listen(9000, () => {
    console.log(`Server up on port 9000`)
})