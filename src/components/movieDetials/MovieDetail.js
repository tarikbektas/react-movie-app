import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviedetials.css";
import axios from "axios";

const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams();
   
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: {language: 'tr'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDg4YmZlMGU3YTQzYmRiNGUxYWE3ODg2ZDliODdkMCIsInN1YiI6IjY1MDFkMjhiZmZjOWRlMGVkZjYxNmU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUsAzXKXi6B51G1i5yx-KMMkEolyze-TsLaMR2PakQw'
    }
  };
  useEffect(()=>{
    axios
    .request(options)
    .then(function (response) {
       
    setMovie(response.data) 
    })
    .catch(function (error) {
     
    });
  },[id])
 

  console.log("movie bilgisi:", movie);
  return (
    <div>
      {
        <div className="movie-detials-main">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            ></img>
          </div>
          <div className="movie-detials-right">
              <h1>{movie.title}</h1>
            <div style={{alignItems:'baseline'}} className="movie-detials">
              <h2>Açıklama: </h2> <p> {movie.overview}</p>
            </div>
           {
            movie.genres &&
 
            <div className="movie-detials">
            <h2>Türü: </h2> {movie.genres.map(item=>{return <p  style={{margin:'2px'}}> {item.name}</p>  })}
          </div>}
            <div className="movie-detials">
              <h2>Orjinal Dil: </h2> <p> {movie.original_language}</p>
            </div>
            <div className="movie-detials">
              <h2>Popülasyon: </h2> <p> {movie.popularity}</p>
            </div>
            <div className="movie-detials">
              <h2>Çıkış Tarihi: </h2> <p> {movie.release_date}</p>
            </div>
           
          </div>
        </div>
      }
    </div>
  );
};

export default MovieDetail;
