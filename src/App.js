import React from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';

const  App=() =>{
  return (
    <MovieProvider>
    <div>
      <Nav/>
    <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
