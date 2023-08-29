const express = require("express")
const petRouter = express.Router()
const Pet = require("../models/pet")

// is there a way I can host .jpg and .png files?
// if I put these in my db how would I render them to the user?

petRouter.route("/")
.get((req, res, next) =>{
    Pet.find()
        .then(response => res.status(200).send(response))
        .catch(error => next(error))
})
.post((req, res, next) => {
    const newPet = new Pet(req.body)
    newPet.save()
        .then(response => res.status(201).send(response))
        .catch(error => next(error))
})

petRouter.route("/:id")
.delete((req, res, next) => {
    const petId = req.params.id
        Pet.findByIdAndDelete(petId)
            .then(response => res.status(200).send(`Successfully deleted ${response}`))
            .catch(error => next(error))
})
.get((req, res, next) => {
    const foundPet = req.params.id
    Pet.findById(foundPet)
        .then(response => res.status(200).send(response))
        .catch(error => next(error))
})










module.exports = petRouter