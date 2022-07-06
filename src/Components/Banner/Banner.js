import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { api_Key } from '../../constants/constants'

export default function Banner() {
  var [movie, setMovie] = useState([])
 useEffect(()=>{
  axios.get(`/trending/all/week?api_key=${api_Key}&language-en-US`).then((response)=>{
    
     setMovie(response.data.results[1]);
    
  })
},[])
  return (
    <div  className='banner'>
        <div className="content">
          <h1 className="title">{(movie) ? movie.name  : "" }</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">Movie List</button>
          </div>
          <h1 className='description'>The stranger things movie have a very interesting story line. I like the movie, My friend s arae also enjoyed when watching this movie</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}



