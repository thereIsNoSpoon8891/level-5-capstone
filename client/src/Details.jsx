import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Nav from "./Nav"



const Details = () => {

    const [pet, setPet] = useState([])

    const params = useParams()

    useEffect(() => {
        axios.get(`/api/${params.id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, [])
    // console.log(pet)

    return(
        <>
            <Nav />
            <div className="details--container">
                <h1 className="details--name">
                    Hi, My name is {pet.name}!
                </h1>
                <img width="600px" className="details--hero" src={pet.imageUrl} />
                {pet.type && <h2 className="details--type">I'm a {pet.type}.</h2>}
                {pet.breed && <h2 className="details--breed">My breed is {pet.breed}.</h2>}
                {pet.birthYear && <h2 className="details--birthday">I was born in {pet.birthYear}. </h2>}
                {pet.comment && <p className="details--comment">What my owner says about me... {pet.comment}</p>}
            </div>
        </>
    )
}

export default Details