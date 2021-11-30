import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList=movies.map((movie)=>(
    
    <div key={movie.title}>
     <p> {movie.title}</p>
   <p> {movie.time}</p>
    <ul><li>{movie.genres}</li></ul>
    </div>
  ))
  return <div><h1>Movies Page</h1>{moviesList}
    
    
   </div>;
}

export default Movies;
