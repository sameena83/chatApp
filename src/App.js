import React from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovies from './AddMovies';

const  App=() =>{
  return (
    <MovieProvider>
    <div>
      <Nav/>
      <AddMovies/>
    <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
