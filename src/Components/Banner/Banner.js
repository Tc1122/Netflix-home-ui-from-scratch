import React from 'react'
import './Banner.css'
export default function Banner() {
  return (
    <div  className='banner'>
        <div className="content">
          <h1 className="title">Movie Name</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">movie Lists</button>
          </div>
          <h1 className='description'>The stranger things is very interesting story. I like the movie, My friend s arae also enjoyed when watching this movie</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}
