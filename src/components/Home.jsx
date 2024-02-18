import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'
import './Home.css'
import { motion } from "framer-motion"
import {Link, Route, Routes} from "react-router-dom"
import{NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import img  from "../../public/image1.png"

const Home = () => {
    const {book} = useSelector((state) => state.RegisterReducer)
    
  return (

    <div className='mainmaster'>

        <div className="main" id="home">
              
              <div className="color">
                  <img src={img} alt=""/>
              </div>
              <div className="head">
                  <h1>Bookopolis</h1>
                  <p>A room without books is like a body without a soul.</p>                  
                </div>
                <div className='main1'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <div className='circle3'></div>
                    <div className='circle4'></div>
                </div>
              
        </div>



        <div className="pg1">
            <h1>Historic</h1>
            
            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">
                    
                    {book.length>0
                            ? book
                            .filter(book => book.category==="historic")
                                .map((book,index)=>{
                                    return(
                                        
                                        <div className="child" key={index}> 
                                            <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                            <h1>{book.title}</h1>
                                            <a href="">Read</a>
                                        </div>
                                    )
                                })
                                .reverse()
                            : " "}
                        
                        <div className="child"> 
                            <img className="child-img" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601883114l/55562715.jpg" alt="" draggable="false"/>
                            <h1>An entirely new history of India</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://m.media-amazon.com/images/I/71n+dHojC4L._SY425_.jpg" alt="" draggable="false"/>
                            <h1>The wonder that was India</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/812JrT-AdZL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>History of Medieval India</h1>
                            <a href="">Read</a>
                           
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://williamdalrymple.com/images/book_images/last_mughal_hard_bloomsbury.jpg" alt="" draggable="false"/>
                            <h1>The Last Mughal: The eclipse of a dynasty</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.mlbd.in/cdn/shop/products/15764_grande.jpg?v=1480061224" alt="" draggable="false"/>
                            <h1>Jainism History Society Philosophy and practise</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            
                            <img className="child-img" src="https://m.media-amazon.com/images/I/81dGXB89uJL._AC_UF894,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>History of sikhs</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/811T+b+0qdL._AC_UF894,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>History of India</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/81flaySX1xL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>An era of darkness The British Empire in India</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/A1XOBk1EawL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>The concise history of Buddhism</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://ia804500.us.archive.org/BookReader/BookReaderImages.php?zip=/7/items/indias-struggle-for-independence_202106/India%27s%20Struggle%20for%20Independence_jp2.zip&file=India%27s%20Struggle%20for%20Independence_jp2/India%27s%20Struggle%20for%20Independence_0000.jp2&id=indias-struggle-for-independence_202106&scale=4&rotate=0" alt="" draggable="false"/>                   
                            <h1>India's struggle for independence</h1>
                            <a href="">Read</a>
                        </div>

                        

                    </div>

                </div>
            
            </div>
        </div>


        <div className="pg2">

            <h1>Romantic</h1>

            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">

                    {book.length>0
                            ? book
                            .filter(book => book.category==="romantic")
                                .map((book,index)=>{
                                    return(
                                        
                                        <div className="child" key={index}> 
                                            <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                            <h1>{book.title}</h1>
                                            <a href="">Read</a>
                                        </div>
                                    )
                                })
                                .reverse()
                            : " "}

                        <div className="child"> 
                            <img className="child-img" src="https://m.media-amazon.com/images/I/51+IQOrfa1L.jpg" alt="" draggable="false"/>
                            <h1>When I am with you</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2017/04/the-one-you-cannot-have.jpg" alt="" draggable="false"/>
                            <h1>The one you cannot have</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2020/05/A-Half-Baked-Love-Story-Anurag-and-Gunjan-Garg.jpg" alt="" draggable="false"/>
                            <h1>A half baked love story</h1>
                            <a href="">Read</a>
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2020/05/The-Girl-Who-Knew-Too-Much-Vikrant-Khanna.jpg" alt="" draggable="false"/>
                            <h1>The girl who knew too much</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2020/05/The-Right-Swipe-Alisha-Rai.jpg" alt="" draggable="false"/>
                            <h1>The right swipe</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2017/04/the-gitl-of-my-dreams.jpg" alt="" draggable="false"/>
                            <h1>The girl of my dreams</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://i.pinimg.com/236x/a1/34/c8/a134c834bb6690de315da178844c6ec1.jpg" alt="" draggable="false"/>
                            <h1>When the sun never sets</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/61iTI4olCEL.jpg" alt="" draggable="false"/>
                            <h1>The boy who loved</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/71Chcpw13lL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>It ends with us</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/81GFqa2KS+L._AC_UF350,350_QL50_.jpg" alt="" draggable="false"/>                   
                            <h1>Lovelight farms</h1>
                            <a href="">Read</a>
                        </div>

                    </div>

                </div>
            
            </div>
        </div>




        <div className="pg3">

            <h1>Thrillers</h1>

            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">

                    {book.length>0
                            ? book
                            .filter(book => book.category==="thriller")
                                
                                    .map((book,index)=>{
                                        return(
                                            
                                            <div className="child" key={index}> 
                                                <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                                <h1>{book.title}</h1>
                                                <a href="">Read</a>
                                            </div>
                                        )
                                    })
                                    .reverse()
                                
                            : ''
                            }

                        <div className="child"> 
                            <img className="child-img" src="https://m.media-amazon.com/images/I/81W-oMLSFtL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>Nobody likes an outsider</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYGgJTvHDnWNNuGDA3W-jZaj0BRiAXZ-4SwE5laN4ycduKd-7P6cvMkEo215rzmq7oe8&usqp=CAU" alt="" draggable="false"/>
                            <h1>Then knives</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFCIWB1DC8II7ZFtoydkfyMTyA-4w_pISOCU2gNG8oszplLR4cVN6oezI-dgPQqFIP70&usqp=CAU" alt="" draggable="false"/>
                            <h1>girl forgotten</h1>
                            <a href="">Read</a>
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://img.buzzfeed.com/buzzfeed-static/static/2019-12/5/6/asset/6835cd03c178/sub-buzz-916-1575528731-1.jpg?resize=625:962" alt="" draggable="false"/>
                            <h1>Night film</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy9v50EEE1YSS72eV8MmxndED20gGJCZtvZWdRr-ESI-koGXY5MkqHHa-NeoKRMijaqs&usqp=CAU" alt="" draggable="false"/>
                            <h1>400 days</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPSjJJ0FZLER5nef68tmHxFE-YbchzjEyO4YyzP0xkQc_tHsmYLQsYhWh2NDB75ftpqA&usqp=CAU" alt="" draggable="false"/>
                            <h1>Antisocial</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDZ6okbmVD4NaO4QRhhRcDwAa1TTbGS_iWX7azazk5QPLSo80Q_uF5PuAvnzkVCq3vmg&usqp=CAU" alt="" draggable="false"/>
                            <h1>The guest list</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbQ0Rs7-hFA1gWtvsLMKAFHSkGGmvBUjAiW7zwhzOnG84djiA_x_Cn0QS0mGb7mRf6EI&usqp=CAU" alt="" draggable="false"/>
                            <h1>Lost boy found</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJSroQCazY08IEDBjfrZwLJZHKzmQPrqBbjrXTcP3QgBoQ45X9pZBjfWzxZg0FhBUN_E&usqp=CAU" alt="" draggable="false"/>
                            <h1>Then she was gone</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589302519-51PeVt0WznL.jpg?crop=1xw:0.999xh;center,top&resize=980:*" alt="" draggable="false"/>                   
                            <h1>I'm watching you</h1>
                            <a href="">Read</a>
                        </div>

                    </div>

                </div>
            
            </div>
        </div>



        <div className="pg4">

            <h1>Kids</h1>

            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">
                    {book.length>0
                            ? book
                            .filter(book => book.category==="kids")
                                .map((book,index)=>{
                                    return(
                                        
                                        <div className="child" key={index}> 
                                            <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                            <h1>{book.title}</h1>
                                            <a href="">Read</a>
                                        </div>
                                    )
                                })
                                .reverse()
                            : ""
                            }
                        <div className="child"> 
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49ZoPEDEaWnbWlQN2Te-b00cOPfAMW4Hj1g&usqp=CAU" alt="" draggable="false"/>
                            <h1>The Great Indian travelogue</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://rukminim2.flixcart.com/image/850/1000/kctf0cw0/regionalbooks/8/s/h/151-indian-mythological-stories-original-imaftue8zyqydggg.jpeg?q=90" alt="" draggable="false"/>
                            <h1>151 Indian mythological stories</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://imaginationsoup.net/wp-content/uploads/2018/03/Indian-Tales.jpg" alt="" draggable="false"/>
                            <h1>Indian tales</h1>
                            <a href="">Read</a>
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcautk1WRKUCbMzAuxavAE9yQSnnrktmJ1gRDFZDuqw9TvIXuhom2ZQnPvsgweEh-vSSA&usqp=CAU" alt="" draggable="false"/>
                            <h1>The Elephant Friend</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrp2lXCOKbSAc1HwUSURLQUJOyrI-3UAOprwFH51n9jo4bhufQ_u0_EtCR-OIDHaTjXg&usqp=CAU" alt="" draggable="false"/>
                            <h1>Indian children favourite stories</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctH-zWmO5a9z6IsZvxhO333lPzmDOon_-HkeGHtFSar8MAO9TVpbU6SlywmgdoNdcSpw&usqp=CAU" alt="" draggable="false"/>
                            <h1>Stories from India</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYEmM61GaZ75UqmAkjmEx618VYrosxbIhXY_tpdPG_8B-UcgyjKMIHkEPXk7aJ2l0d9E&usqp=CAU" alt="" draggable="false"/>
                            <h1>sari-Sari Summers</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlzFXKGhD4HsyGzJWdK8RREsmtnL_FFD_b1NCI9TaMRpNnBSm9XQdELnsjBr-HJSoGxI&usqp=CAU" alt="" draggable="false"/>
                            <h1>10 Gulab Jamuns</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnh6u7djxwIVHXtgRiOCsyNMpkx-pzW6Co8CUUkCgzjfwOrZfhq6b8tZ8Gr5RrcB9DdCU&usqp=CAU" alt="" draggable="false"/>
                            <h1>Granddads are the greatest</h1>
                            <a href="">Read</a>
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_v83fGxctTLyn2d_HfhMKSH3brZO46POuGHa_WYk8T-1dDhJ2x3VeyJ3v8dc6FwQITg&usqp=CAU" alt="" draggable="false"/>                   
                            <h1>Remembering Sundays with Grandpa</h1>
                            <a href="">Read</a>
                                           
                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    


        <div className="pg5">

            <h1>Fiction</h1>

            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">
                    {book.length>0
                            ? book
                            .filter(book => book.category==="fiction")
                                .map((book,index)=>{
                                    return(
                                        
                                        <div className="child" key={index}> 
                                            <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                            <h1>{book.title}</h1>
                                            <a href="">Read</a>
                                        </div>
                                    )
                                })
                                .reverse()
                            : " "}
                        <div className="child"> 
                            <img className="child-img" src="https://wp.scoopwhoop.com/wp-content/uploads/2014/05/567730bc6e510a6f3a759529_bk7.jpg" alt="" draggable="false"/>
                            <h1>Midnight's children</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOImB6nPy7LQJg0D2yAnBmKRJ_Zug2lvi5g&usqp=CAU" alt="" draggable="false"/>
                            <h1>The endless search for satisfaction</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9EmBl1F6synfUmosAmLG-FuQPyuQifvAmbgTuLWNQjFYpxtma6ExSBVc7KqulfRul-M&usqp=CAU" alt="" draggable="false"/>
                            <h1>Life is what you make it</h1>
                            <a href="">Read</a>
                            
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLPykGzJcYmNh_fSWwhVhzSU1xVbbup9ZBg&usqp=CAU" alt="" draggable="false"/>
                            <h1>The girl in the room 105</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2020/08/Chaturanga-Anand-by-Neelakantan-1200x1864.jpg" alt="" draggable="false"/>
                            <h1>Bahubali before the beginning</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_3-pRDRBKb_iFBTD_CoMSCnrx8hMKN4-fXZjqZ2v8driHRWh6R8zQVj_MPRCMfDeHK4&usqp=CAU" alt="" draggable="false"/>
                            <h1>This is not your story</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://wp.scoopwhoop.com/wp-content/uploads/2014/05/567730bc6e510a6f3a759529_bk2.jpg" alt="" draggable="false"/>
                            <h1>Autobiography of an unknown Indian</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/41e+TR4xPDL._SY445_SX342_.jpg" alt="" draggable="false"/>
                            <h1>The alchemist</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/71dNsRuYL7L._SY425_.jpg" alt="" draggable="false"/>
                            <h1>You only live once</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/91PQFpYWLwL._SY425_.jpg" alt="" draggable="false"/>                   
                            <h1>Something I never told you</h1>
                            <a href="">Read</a>
                                           
                        </div>

                    </div>

                </div>
            
            </div>
        </div>



        <div className="pg6">

            <h1>Biography</h1>

            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">
                    {book.length>0
                            ? book
                            .filter(book => book.category==="biography")
                                .map((book,index)=>{
                                    return(
                                        
                                        <div className="child" key={index}> 
                                            <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                            <h1>{book.title}</h1>
                                            <a href="">Read</a>
                                        </div>
                                    )
                                })
                                .reverse()
                            : " "}
                        <div className="child"> 
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL3gcZKLE2RDyMdfQaijqgT2Wcla72jKUVLVBOH8s3xBHeeGQ3QDTR1g5scMm-5Y8Kno&usqp=CAU" alt="" draggable="false"/>
                            <h1>Stephen Hawking a biography</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyf-6MOwwYuH5QXczzed-CC4IWamkQQI7HCUIwIJL0LjscS-XtzL3U5YWWzd25J37W4ZY&usqp=CAU" alt="" draggable="false"/>
                            <h1>At the Helm</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/61eGw01BGPL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>Behenji</h1>
                            <a href="">Read</a>
                            
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/41PrC5p39CL._AC_UF1000,1000_QL80_.jpg" alt="" draggable="false"/>
                            <h1>Jawaharlal Nehru</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyOExJEEdW6QGIem5_hKDPMump_bOurikUSJx4d3FRh_nRvSPOxEhM0zpDsjeiL-ctG8&usqp=CAU" alt="" draggable="false"/>
                            <h1>Einstein his life and universe</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_jhrBdX3XUimSPOZAZyFPd64oNPswPCY9roX8i1HR0cORYe5Vc1DvB99d-PsmZyJySA&usqp=CAU" alt="" draggable="false"/>
                            <h1>Mahatma Gandhi</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIPKmE0mis6GGER4zPRTZEZTjXsu9FIfrKg&usqp=CAU" alt="" draggable="false"/>
                            <h1>Gandhi before India</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://cdn.exoticindia.com/images/products/original/books/ihl339.jpg" alt="" draggable="false"/>
                            <h1>Mother India Indira Gandhi</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/41KjA2iNXvL._SY445_SX342_.jpg" alt="" draggable="false"/>
                            <h1>why I am an atheist</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/413u91II2oL._SY445_SX342_.jpg" alt="" draggable="false"/>                   
                            <h1>Learning how to fly</h1>
                            <a href="">Read</a>
                                           
                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    



        <div className="pg7">

            <h1>Horror</h1>

            <div className="main-scroll-div">

                <div className="cover">

                    <div className="scroll-images">
                    {book.length>0
                            ? book
                            .filter(book => book.category==="horror")
                                .map((book,index)=>{
                                    return(
                                        
                                        <div className="child" key={index}> 
                                            <img className="child-img"  src= {book.imglink} alt="" draggable="false"/>
                                            <h1>{book.title}</h1>
                                            <a href="">Read</a>
                                        </div>
                                    )
                                })
                                .reverse()
                            : " "}
                        <div className="child"> 
                            <img className="child-img" src="https://m.media-amazon.com/images/I/41kRkqIt6aL._SY445_SX342_.jpg" alt="" draggable="false"/>
                            <h1>That night</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child"> 
                            <img className="child-img" src="https://m.media-amazon.com/images/I/51TcWGvqLZL._SY445_SX342_.jpg" alt="" draggable="false"/>
                            <h1>The Hidden Hindu</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://m.media-amazon.com/images/I/51wlOYeH4BL._SY445_SX342_.jpg" alt="" draggable="false"/>
                            <h1>A good girl's guide to murder</h1>
                            <a href="">Read</a>
                            
                        </div> 

                        <div className="child">
                            <img className="child-img" src="https://qph.cf2.quoracdn.net/main-qimg-2f8330aceb344b90dd413db531a1f22a-lq" alt="" draggable="false"/>
                            <h1>devi</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLE_YGhFgA8LLiiCONyik0SHs5W8ZtWcW8nXEVikmlD7YyB1E1Pysa-Y6dBP08-HjBiCI&usqp=CAU" alt="" draggable="false"/>
                            <h1>Darkness</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://s3.r29static.com/bin/entry/754/x,80/2030551/image.jpg" alt="" draggable="false"/>
                            <h1>it</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://img.buzzfeed.com/buzzfeed-static/static/2018-10/5/15/asset/buzzfeed-prod-web-05/sub-buzz-13709-1538769599-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" alt="" draggable="false"/>
                            <h1>Pet sematary</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.njkinnysblog.com/wp-content/uploads/2022/09/city-of-screams-neil-d-silva-book-cover.png" alt="" draggable="false"/>
                            <h1>City of screams</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.booked4books.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-14-at-4.36.54-PM.jpeg" alt="" draggable="false"/>
                            <h1>The frequent visitor</h1>
                            <a href="">Read</a>
                            
                        </div>

                        <div className="child">
                            <img className="child-img" src="https://www.bookgeeks.in/wp-content/uploads/2023/05/Ghosts-in-the-Dark-Silence-by-Anita-Krishnan.jpg" alt="" draggable="false"/>                   
                            <h1>Ghosts in the dark silence</h1>
                            <a href="">Read</a>
                                           
                        </div>

                    </div>

                </div>
            
            </div>
        </div>
        


        <footer id="contact">
        <h1>Bookopolis</h1>

           
           

            

            <div className="footer4">
                <div className="card">
                    <a className="socialContainer containerOne" href="#">
                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                    </a>
                    
                    <a className="socialContainer containerTwo" href="#">
                    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
                    
                    <a className="socialContainer containerThree" href="#">
                    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                    </a>
                    
                    <a className="socialContainer containerFour" href="#">
                    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                    </a>
                </div>  
            </div>
            <br />
            <br />
            <p>All rights reserved. &copy; 2024 </p>
        </footer>
        
    
    </div>

  )
}

export default Home