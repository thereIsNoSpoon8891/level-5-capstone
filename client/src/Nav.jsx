import {Link} from "react-router-dom"





const Nav = () => {

    return(
        <div className="nav--container">

            <Link to="/">
                <h1>Home</h1>
            </Link>

            <Link to="/posts">
                <h1>Pets</h1>
            </Link>

            <Link to="/form">
                <h1>Post</h1>
            </Link>
            
        </div>
    )
}

export default Nav