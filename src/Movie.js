import PropTypes from "prop-types";

function Movie({title, coverImg,summary, genres}){
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt={title}></img>
      <p>{summary}</p>
      <ul>
        {genres.map((genre)=><li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  //genres는 string을 element로 갖는 array임
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;