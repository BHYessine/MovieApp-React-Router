import React from 'react';
import { Link} from 'react-router-dom';
const MovieCard= props => {
    return (
        <Link to={'/movie/'+props.Title}  className="card" >
        <div className="cardMovie">
                <img src={props.Src} width="300" height="200" alt=""/>            
                <h2>{props.Title}  </h2>
                <h3> Rating: {props.Rating}/4 </h3>            
        </div>
        </Link>
    );
};


export default MovieCard;