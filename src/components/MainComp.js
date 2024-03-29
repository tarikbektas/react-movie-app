import React from "react";
import Header from "./header/Header";
import MovieLİst from "./movieList/MovieLİst";
import FavoriMovie from "./favoriMovie/FavoriMovie";
const MainComp = () => {
  return (
    <div>
      <Header></Header>
      <MovieLİst></MovieLİst>
      <FavoriMovie></FavoriMovie>
    </div>
  );
};

export default MainComp;
