import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList=movies.map((movie)=>(
    <div>{movie.title}
    {movie.time}
    <ul><li>{movie.genre}</li></ul>
    </div>
  ))
  return <div>{<h1>Movies Page</h1>,moviesList
    
    
    /*{code here}*/}</div>;
}

export default Movies;
