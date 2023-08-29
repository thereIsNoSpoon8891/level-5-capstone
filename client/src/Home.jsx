import Nav from "./Nav"
import Pet from "./Pet"
import bunny from "../images/bunny-image.jpeg"
import dingo from "../images/stock-pet.jpeg"

const Home = () => {


    
    return(
        <>
        <Nav />
            <div className="home--container">
                <h1>Welcome To Awesome Pets!</h1>
                <p>
                    This site is dedicated to animal lovers around the world. 
                </p>
                <p>
                    Use the navigation bar at the top to move around the site.
                    Head over to "Pets" to see the current showcased pets.
                </p>
                <p>
                    Have a pet you want to show off? Click the "Post" link, it will take you to the
                    form required to submit your pet. 
                </p>
            <div className="home--image-continer">
                <img className="bunny--hero" width="400px" src={bunny} />
                <img className="dingo--hero" width="400px" src={dingo} />
            </div>
            </div>
        </>
    )
}

export default Home