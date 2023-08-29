import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Nav from "./Nav"

// name:{
//     type: String,
//     required: true
// },
// type: String,
// breed: String,
// birthYear: Number,
// imageUrl: {
//     type: String,
//     required: true
// },
// comment: String
// })

const Form = () => {

    const template = {
        name: "",
        type: "",
        breed: "",
        birthYear: "",
        imageUrl: "",
        comment: ""
    }//add image property replace url?
    const [pet, setPet] = useState(template)
    //additional state to handle image conversion, how to set a Max size conditional
    // backend won't need changes should post as long as we control the file size

    const nav = useNavigate()// after submitting the form, take user straight to their details page

    const handleChange = e => {//heres the issue... how to convert
        const {name, value} = e.target
        //convert the one image property to base64
        //add image property OR assign converted value to image property?
            setPet(prevPet => ({...prevPet, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
            axios.post("/api", pet)
                .then(res => console.log(res))
                .then(data => setPet(template))
                .catch(err => console.log(err))
    }
console.log(pet)
    return(
        <>
        <Nav />
            <div >

                <form 
                className="form--container"
                onSubmit={handleSubmit}>

                    <input
                    type="text"
                    required
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    maxLength={50}
                    minLength={2}
                    className="form--name"
                    value={pet.name}
                    />

                    <input
                    type="text"
                    placeholder="Type of pet? e.g. Dog, Reptile, Bird..."
                    name="type"
                    onChange={handleChange}
                    maxLength={50}
                    minLength={2}
                    className="form--type"
                    value={pet.type}
                    />

                    <input 
                    type="text"
                    placeholder="Breed"
                    name="breed"
                    onChange={handleChange}
                    maxLength={20}
                    className="form--breed"
                    value={pet.breed}
                    />

                    <input 
                    type="number"
                    placeholder="Birth Year"
                    name="birthYear"
                    onChange={handleChange}
                    maxLength={4}
                    minLength={4}
                    className="form--birthday"
                    value={pet.birthYear}
                    />

                    <input 
                    type="text"
                    placeholder="Image URL"
                    name="imageUrl"
                    required
                    onChange={handleChange}
                    className="form--image-input"
                    value={pet.imageUrl}
                    />
                    <textarea
                    type="text"
                    className="form--comment--box"
                    placeholder="A little bit about your pet..."
                    name="comment"
                    onChange={handleChange}
                    maxLength={50}
                    minLength={2}
                    value={pet.comment}
                    />

                    <button className="form--submit-button">
                        Submit 
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form