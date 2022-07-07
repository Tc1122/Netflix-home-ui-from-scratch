import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'
import {image_Url} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
  const [movie, setMovie] = useState([]);

 useEffect(() => {
   axios.get(props.url).then((response)=>{
         console.log(response.data.results)
         setMovie(response.data.results);
 }, [])
})
  return (
    <div className='row'>
      <h1 className='title'>{props.title}</h1>
       <div className="posters">
      {movie.map((movie)=>
               <img className={props.isSmall ? 'rowpost-image' : 'bigposter'} src={`${image_Url+movie.backdrop_path}`} alt="" />
      )}
              </div>
    </div>
  )
}
export default RowPost
