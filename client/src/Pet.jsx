import { Link } from "react-router-dom"
import axios from "axios"





const Pet = (props) => {

    const {name, type, breed, id, reload} = props

    const deletePet = e => {
        const {id} = e.target
        axios.delete(`/api/${id}`)
            .then(res => reload())
            .catch(err => console.log(err))
    }

    return(
        <div className="pet--container">
            <h1>Awesome Pet</h1>
            <div className="pet--details--container">
                <h2>Name: {name}</h2>
                <h2>Type: {type}</h2>
                <h2>Breed: {breed}</h2>
                <Link to={`/${id}`}>
                    <button className="pet--details-button">
                        Check Me Out!
                    </button>
                </Link>
                <button 
                onClick={deletePet}
                id={id} 
                className="pet--details-button">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Pet