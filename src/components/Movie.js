import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, coverImg,summary, genres}){
  return (
    <div>
      {/* <h2>{title}</h2> */}
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre)=><li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  //genres는 string을 element로 갖는 array임
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;