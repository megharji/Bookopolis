import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from "react-router-dom";
import { registerbook } from "../store/reducers/RegisterReducer";
import { useDispatch } from "react-redux";


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
                <input onChange={(e) => settitle(e.target.value)} value={title} className='inp1' type="text" placeholder="Title" name="title"/>
                <input onChange={(e) => setauthor(e.target.value)} value={author} className='inp2' type="text" placeholder="Author Name" name="author"/>
                <input onChange={(e) => setimglink(e.target.value)} value={imglink} className='inp3' type="text" placeholder="Book Img Link" name="imglink"/>
                <input onChange={(e) => setlink(e.target.value)} value={link}  className='inp4' type="text" placeholder="Book Link" name="link"/>
                <select onChange={(e) => setcategory(e.target.value)} name="category">
                    <option value="category">Category</option>
                    <option value="historic">Historic</option>
                    <option value="romantic">Romantic</option>
                    <option value="thriller">Thriller</option>
                    <option value="kids">Kids</option>
                    <option value="fiction">Fiction</option>
                    <option value="biography">Biography</option>
                    <option value="horror">Horror</option>
                </select>
                <input onChange={(e) => setpages(e.target.value)} value={pages} className='inp5' type="number" placeholder="No. Of Pages" name="pages" />
                <input onChange={(e) => setpublication(e.target.value)} value={publication}  className='inp6' type="text" placeholder="Year Of Publication" name="publication" />
                <button>Register Book</button>

            </form>
       </div>
      
     
    </div>
  )
}

export default Register

