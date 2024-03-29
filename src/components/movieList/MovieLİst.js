import React, { useEffect, useState } from "react";
import "./movielist.css";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieItem from "../movieItem/MovieItem";
import { useSelector } from "react-redux";

const MovieList = ({ favoriMoviee }) => {
  const [favoriteMovie, setFavoriteMovie] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);

  let x = useSelector((state) => {
    return state.movie.searchTerm;
  });
   
  const responsive = {
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 4,
    },
  };
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: x,
        include_adult: "false",
        language: "tr",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDg4YmZlMGU3YTQzYmRiNGUxYWE3ODg2ZDliODdkMCIsInN1YiI6IjY1MDFkMjhiZmZjOWRlMGVkZjYxNmU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUsAzXKXi6B51G1i5yx-KMMkEolyze-TsLaMR2PakQw",
      },
    };

    axios.request(options).then((ress) => {
      setSearchMovie(ress.data.results);
     });
  }, [x]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/week",
      params: { language: "tr" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDg4YmZlMGU3YTQzYmRiNGUxYWE3ODg2ZDliODdkMCIsInN1YiI6IjY1MDFkMjhiZmZjOWRlMGVkZjYxNmU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fUsAzXKXi6B51G1i5yx-KMMkEolyze-TsLaMR2PakQw",
      },
    };

    axios.request(options).then((ress) => {
      setFavoriteMovie(ress.data.results);
    });
  }, []);
  const favoriMovie = (favoriMovie) => {
    favoriMoviee(favoriMovie);
  };
  return (
    <div className="">
       {x ?   <h1 style={{textAlign:'center'}}>'{x}' ile ilgili bulunan sonuçlar</h1>: <h1 style={{textAlign:'center'}}>Favori Film Listesi</h1>}
      <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
       {x ?  searchMovie.map((item, index) => {
          return (
            <MovieItem
              favoriMovie={favoriMovie}
              item={item}
              key={index}
            ></MovieItem>
          );
        }):
        favoriteMovie.map((item, index) => {
          return (
            <MovieItem
              favoriMovie={favoriMovie}
              item={item}
              key={index}
            ></MovieItem>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

export default MovieList;
