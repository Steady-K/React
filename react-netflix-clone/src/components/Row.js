import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import './Row.css';

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log('request', request);
    setMovies(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{'<'}</span>
        </div>
      </div>
      <div id={id} className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              } `}
              //   loading="lazy"
              alt={movie.name}
            />
          );
        })}
      </div>
      <div className="slider__arrow-right">
        <span className="arrow">{'>'}</span>
      </div>
    </section>
  );
}
