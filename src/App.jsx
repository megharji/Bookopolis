import React from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About.jsx"
import Register from './components/Register.jsx';
import Styles from './App.module.css';
import Nav from "./components/Nav";


const App = () => {
  return (
    <div className={Styles.container}>
        <Nav/>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/register' element = {<Register/>}/>

        </Routes>
    </div>
  )
}

export default App