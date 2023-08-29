import { useState, useEffect} from "react"
import axios from "axios"
import Nav from "./Nav"
import Pet from "./Pet"



const Posts = () => {

    const [pets, setPets] = useState([])

    const getPets = () =>{
        axios.get("/api/")
        .then(res => setPets(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getPets()
    },[])
  
    const petElements = pets.map(pet =>( <Pet 
        name={pet.name} 
        type={pet.type} 
        breed={pet.breed} 
        id={pet._id}
        reload={getPets}
        key={pet._id}
        />))

console.log(pets)
    return(
        <>
        <Nav />
        <div className="posts--container">
            {petElements}
        </div>
        </>
    )
}

export default Posts