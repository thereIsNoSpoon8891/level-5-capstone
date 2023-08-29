import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from "react-router-dom" 
import Details from "./Details" 
import Home from "./Home"
import Form from "./Form"
import Posts from "./Posts"
import "./app.css"



function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/form' element={<Form />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
