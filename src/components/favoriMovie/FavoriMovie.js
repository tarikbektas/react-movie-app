import React from "react";
import "./favorimovie.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieItem from "../movieItem/MovieItem";
import { useSelector } from "react-redux";
const FavoriMovie = () => {
  const favoriMovie = useSelector((state) => {
    return state.movie.favoriMovie;
  });
  console.log("favori movie bilgisi", favoriMovie);
  const responsive = {
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 4,
    },
  };
  return (
    <div className="favori-movie-main">
      <h1>Favori Filmleriniz</h1>
      <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
        {favoriMovie ? (
          favoriMovie.map((item, index) => {
            return <MovieItem kontrol={true} item={item} key={index}></MovieItem>;
          })
        ) : (
          <h1>Favori Film Mevcut Değil</h1>
        )}
      </Carousel>
    </div>
  );
};

export default FavoriMovie;
