import React,{useState} from 'react'
import MovieCard from "./MovieCard";
import allmovies from '../state'
import AddMovie from './AddMovie';
function  MovieList() {
    const  addNewMovie =()  => {

    }
    const [movies, setMovies] = useState(allmovies)
             const heremovies = movies.map(function(movie,index) {
                 return <MovieCard  key={index}   movie={movie}  />
             })
    return (
        <div>

        <div  style={{
            display:'grid',
            gridTemplateColumns:'auto auto auto'
        }}>
                 
                   {heremovies}

        </div>
        <div>
           <AddMovie   addNewMovie={addNewMovie} />
        </div>
            </div>
    )
}

export default MovieList
