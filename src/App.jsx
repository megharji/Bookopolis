import React from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About.jsx"
import Register from './components/Register.jsx';
const App = () => {
  return (
    <>
        <Nav/>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/register' element = {<Register/>}/>

        </Routes>
    </>
  )
}

export default App