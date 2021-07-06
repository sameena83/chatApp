import React, {useState,createContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider =props => {
    const[movies,setMovies]=useState([
        {
            name:'Harry Potter',
            price:'€10',
            id:23124
    
        },
        {
            name:'rocket',
            price:'€60',
            id:19249
    
        },
        {
            name:'Locket',
            price:'€30',
            id:92312
    
        }
    
        ]);
    return (
        <MovieContext.Provider  value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}