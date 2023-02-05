import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //useEffect에서 사용할 async가 붙은 function 
  //아래 useEffect에 있었던 fetch.then 부분을 async, awiat로 바꿔서 만든 function
  async function getMovies(){
    const getResponse = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const toJson = await getResponse.json();
    setMovies(toJson.data.movies);
    setLoading(false);
  }
  //function App이 생성된 최초에만 실행
  useEffect(()=>{
    getMovies()
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    // .then((response)=>response.json())
    // .then((data)=>setMovies(data.data.movies)); setLoading(false);
  }, [])

  console.log(movies);

  return (
  <div>
    {loading? <h1>Loading</h1>:<div>{movies.map((movie)=>
    <Movie key={movie.id} id={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres}/>)}</div>}
  </div>
  )
}



export default Home;