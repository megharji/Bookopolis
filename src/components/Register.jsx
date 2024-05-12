import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from "react-router-dom";
import { registerbook } from "../store/reducers/RegisterReducer";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const navigate = useNavigate();
    const [title, settitle] = useState("")
    const [author, setauthor] = useState("")
    const [imglink, setimglink] = useState("")
    const [link, setlink] = useState("")
    const [category, setcategory] = useState("")
    const [pages, setpages] = useState("")
    const [publication, setpublication] = useState("")
    const dispatch = useDispatch()
    const [error, setError] = useState("");

    const validateForm = () => {
      if (!title || !author || !imglink || !link || category === "" || !pages || !publication) {
          setError("Please fill in all fields.");
          return false;
      }
      return true;
  };

    const SubmitHandler = (e) =>{
        e.preventDefault()

        const book = {title, author, imglink, link, category, pages, publication};

        dispatch(registerbook(book))
        navigate("/")
    }
  return (
    <div className="container">
       
       <div className='container2'>
        <h1>Register Your Books</h1>
            <form onSubmit={SubmitHandler}>
                <input onChange={(e) => settitle(e.target.value)} value={title} className='inp1' type="text" placeholder="Title" name="title" required/>
                <input onChange={(e) => setauthor(e.target.value)} value={author} className='inp2' type="text" placeholder="Author Name" name="author" required/>
                <input onChange={(e) => setimglink(e.target.value)} value={imglink} className='inp3' type="text" placeholder="Book Img Link" name="imglink" required/>
                <input onChange={(e) => setlink(e.target.value)} value={link}  className='inp4' type="text" placeholder="Book Link" name="link" required/>
                <select onChange={(e) => setcategory(e.target.value)} name="category" required>
                    <option value="category">Category</option>
                    <option value="historic">Historic</option>
                    <option value="romantic">Romantic</option>
                    <option value="thriller">Thriller</option>
                    <option value="kids">Kids</option>
                    <option value="fiction">Fiction</option>
                    <option value="biography">Biography</option>
                    <option value="horror">Horror</option>
                </select>
                <input onChange={(e) => setpages(e.target.value)} value={pages} className='inp5' type="number" placeholder="No. Of Pages" name="pages" required/>
                <input onChange={(e) => setpublication(e.target.value)} value={publication}  className='inp6' type="text" placeholder="Year Of Publication" name="publication" required/>
                {error && <p className="error">{error}</p>} {/* Show error message if exists */}

                <button>Register Book</button>

            </form>
       </div>
      
     
    </div>
  )
}

export default Register

