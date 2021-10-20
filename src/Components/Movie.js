import React from 'react';
import { Link } from 'react-router-dom';
import {movieList} from "./MovieList";
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from "react-player";
function Movie ({match}) {
      
    let ID=match.params.id
    
    const movieDescription= movieList.filter(movie => movie.Title === ID).map(filteredMovie =>(
      filteredMovie.Description
            ))
    const movieTrailer= movieList.filter(movie => movie.Title === ID).map(filteredMovie =>(
      filteredMovie.Link))
    return (
      <div className="movie">
        <div className="movie-header" >           
          <Link to="/"  > <BsArrowLeft className="closeBtn"/> </Link>
          <h1> {ID} </h1>
        </div>
        <ReactPlayer url={movieTrailer} width="100%" height="510px" />
        <h2>Description:</h2>
        <h3>{movieDescription}</h3>
        </div>
    );
};



export default Movie;