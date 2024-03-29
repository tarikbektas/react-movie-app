import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie-slice",
  initialState: {
    favoriMovie: [],
    searchTerm: "",
  },
  reducers: {
    favoriMoviee(state, actions) {
      const isExists = state.favoriMovie.some(
        (item) => item.id === actions.payload.id
      );
      if (!isExists) {
        state.favoriMovie = [...state.favoriMovie, actions.payload];
      }
    },
    deleteFavoriMovies(state, actions) {
      state.favoriMovie = state.favoriMovie.filter((item) => {
        return item.id !== actions.payload.id;
      });
    },
    searchTerm(state, actions) {
      state.searchTerm = actions.payload;
    },
   
  },
});

export const movieReducers = movieSlice.reducer;
export const { favoriMoviee, deleteFavoriMovies, searchTerm } =
  movieSlice.actions;
