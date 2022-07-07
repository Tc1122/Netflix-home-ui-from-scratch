import React from 'react'
import { useEffect , useState} from 'react'
import axios from '../../axios'
import {api_Key, image_Url} from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [Id, setId] = useState('')

 useEffect(() => {
   axios.get(props.url).then((response)=>{
         console.log(response.data.results)
         setMovie(response.data.results);
   })

 }, [])

const handleMovie = (id)=>{
 axios.get(`/movie/${id}/videos?api_key=${api_Key}&language=en-US`).then(response=>{
        if(response.data.results.length !== 0){
          setId(response.data.results[0])
        }else{
          console.log("Trailer not available")
        }
 })
}
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
  return (
    <div className='row'>
      <h1 className='title'>{props.title}</h1>
       <div className="posters">
      {movie.map((movie)=>
               <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'rowpost-image' : 'bigposter'} src={`${image_Url+movie.backdrop_path}`} alt="" />
      )}
              </div>
      { Id &&  <YouTube opts = {opts} videoId= {Id.key}/>}
    </div>
  )
}
export default RowPost
