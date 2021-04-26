import React, {useState} from 'react'

import FilterMovie from './Components/FilterMovie'
import MovieList from './Components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
function App() {

    return (
        <div>
           <FilterMovie/>   
           <AddMovie/>
           <MovieList/>
        </div>
    )
}

export default App
