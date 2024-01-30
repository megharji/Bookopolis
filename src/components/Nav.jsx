import{NavLink} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
        <NavLink className='nav1' style={(e)=> {
          return{
            color: e.isActive ? "white" : " ",
            fontSize : e.isActive ? "2vmax" : " ", 
                   }
        }} to="/"><i className="ri-home-fill"></i> Home</NavLink>

       

        <NavLink className='nav3' style={(e)=> {
          return{
            color: e.isActive ? "white" : " ",
            fontSize : e.isActive ? "2vmax" : " "        }
        }} to="/about"><i className="ri-file-user-fill"></i> About Us</NavLink>


        <NavLink className='nav3' style={(e)=> {
          return{
            color: e.isActive ? "white" : " ",
            fontSize : e.isActive ? "2vmax" : " "        }
        }} to="/register"><i className="ri-registered-line"></i> Register Your Book</NavLink>

    </nav>
  )
}

export default Nav