const mongoose = require("mongoose")
const Schema = mongoose.Schema


const petSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    type: String,
    breed: String,
    birthYear: Number,
    imageUrl: {
        type: String,
        required: true
    },
    comment: String
})


module.exports = mongoose.model("Pet", petSchema)