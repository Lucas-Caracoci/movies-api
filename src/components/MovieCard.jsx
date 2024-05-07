import './card.css'

import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">

      {showLink && <Link to={`/movie/${movie.id}`} className='details'>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
      </Link>}
    </div>
  )
}

export default MovieCard
