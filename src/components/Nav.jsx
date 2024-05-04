import{NavLink} from 'react-router-dom'
import Styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={Styles.container}>

          <NavLink className={Styles.nav1} style={(e)=> {
            return{
              color: e.isActive ? "white" : " ",
              fontSize : e.isActive ? "2vmax" : " ", 
                    }
          }} to="/"><i className="ri-home-fill"></i> Home</NavLink>

        

          <NavLink className={Styles.nav1} style={(e)=> {
            return{
              color: e.isActive ? "white" : " ",
              fontSize : e.isActive ? "2vmax" : " "        }
          }} to="/about"><i className="ri-file-user-fill"></i> About Us</NavLink>


          <NavLink className={Styles.nav1} style={(e)=> {
            return{
              color: e.isActive ? "white" : " ",
              fontSize : e.isActive ? "2vmax" : " "        }
          }} to="/register"><i className="ri-registered-line"></i> Register Your Book</NavLink>


    </div>
  )
}

export default Nav