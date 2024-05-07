import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsArrowBarRight,
} from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG
import "./Movie.css";

const bgUrl = import.meta.env.VITE_BG
const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY



const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // Verifique a estrutura dos dados retornados
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);
 
 
  return (
    <div className='movie'>
      
      {movie &&  (
        <>
        <img src={bgUrl + movie.backdrop_path} alt='' className='bg-img'/>
        <div className='movie-container'>
          <h2 className='movie-title'>{movie.title}</h2>
          <div className='info-movie'>
          
            <div>
              <img src={imageUrl + movie.poster_path} alt={movie.title} />
              <p className="tagline">{movie.tagline}</p>
            </div>
            
            <div className='text-info'>
            <div className="info">
              <h3>
                <FaTheaterMasks /> Genres: <span>{movie.genres.map(genre => genre.name).join(", ") }</span>
              </h3>
              </div>
              <div >
                <h3>
                  <BsWallet2 /> Budget: <span>{formatCurrency(movie.budget)}</span>
                </h3>
                
              </div>
              <div >
                <h3>
                  <BsGraphUp /> Revenue: <span>{formatCurrency(movie.revenue)}</span>
                </h3>
                
              </div>
              <div >
                <h3>
                  <BsHourglassSplit /> Runtime: <span>{movie.runtime} minutes</span>
                </h3>
                
              </div>
              <div >
                <h3>
                  <BsFillFileEarmarkTextFill /> Overview: <p id='scroll' className='overview'>{movie.overview}</p>
                </h3>
                
              </div>
            </div>
              
          </div>
        </div>
        </>
      )}

    </div>
      )
      }

      export default Movie
