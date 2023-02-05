import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const {id} = useParams();

  async function getMovies(){
    const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setMovie((prev)=>json);
    setLoading(false);
  }

  useEffect(()=>{
    getMovies();
  }, [])

  return (
    <div>
      {loading? <h1>loading</h1> : 
      <div>
        <h1>{movie.data.movie.title}</h1>
        <img src={movie.data.movie.medium_cover_image} alt={movie.data.movie.title}></img>
      </div>}
    </div>

  )
  
}

export default Detail;