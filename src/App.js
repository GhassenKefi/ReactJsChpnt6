import { useState } from 'react'
import MovieList from './Components/MovieList'
import './App.css';
import { Movies } from './Data';
import AddMovie from './Components/AddMovie';
import Header from './Components/Header';

function App() {

  const [movies, setMovies] = useState(Movies);
  const [movieList,setMovieList]= useState([])
  


  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const handleFilteredList = (newMovies) =>{
    setMovieList(newMovies)
  }

  return (
    <div className="App">
      <Header
        movies={movies}
        FilteredList={handleFilteredList}
      ></Header>
      <div className="MainContent">
        <MovieList
          movie={movieList}
        ></MovieList>
        <AddMovie addMovieFn={addNewMovie} />
      </div>

    </div>
  );
}
export default App;