import React from "react";
import "./movieitem.css";
import { useDispatch, useSelector } from "react-redux";
import { favoriMoviee, deleteFavoriMovies } from "../../store/slice/Movie";
import { Link } from "react-router-dom";

const MovieItem = ({ item, kontrol }) => {
  const dispatch = useDispatch();
  const favoriMovie = () => {
    dispatch(favoriMoviee(item));
  };
  const removeFavori = () => {
    dispatch(deleteFavoriMovies(item));
  };
  const favorimovie = useSelector((state) => {
    return state.movie.favoriMovie;
  });

  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={ `/movie/${item.id}` }
        
      >
        <div className="movie-item-main">
          <div className="movie-item">
            <img
              alt={item.id}
              className="movie-img"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            ></img>
          </div>

          <div className="add-favorite">
            {kontrol ? (
              <button
                className="add-favorite-button"
                onClick={(e) => {
                  removeFavori(item);
                  e.preventDefault();
                }}
              >
                Favorilerden kaldır
              </button>
            ) : (
              <button
                className="add-favorite-button"
                onClick={(e) => {
                  favoriMovie(item);
                  e.preventDefault();
                }}
              >
                Favorilere Ekle
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
