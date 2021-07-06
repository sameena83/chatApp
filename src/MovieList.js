import React ,{useState,useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const value=useContext(MovieContext);
    
    return (
        <div>
           <h1> {value}</h1>
        </div>
    )
}

export default MovieList
