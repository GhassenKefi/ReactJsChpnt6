import { useState, useEffect } from 'react'
import MovieList from './Components/MovieList'
import './App.css';
import { Movies } from './Data';
import AddMovie from './Components/AddMovie';
import Header from './Components/Header';

function App() {

  const [movies, setMovies] = useState(Movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const [searchResults, setSearchResults] = useState(movies);
  const [searchResults1, setSearchResults1] = useState(movies);


  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const searchWordHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newMoviesList = searchResults.filter((movie) => {
        return (
          Object.values(movie.title).join("").toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      setSearchResults1(newMoviesList)
    }
    else {
      setSearchResults1(searchResults1)
    }
  };
  const searchRatehandler = (Rate) => {
    setSearchRate(Rate);
    if (Rate > 0) {
      const newMoviesList = movies.filter(function (movie) {
        return movie.rating >= Rate;
      })
      setSearchResults(newMoviesList);
    } else {
      setSearchResults(movies);
    }
  };
  useEffect(() => {
  }, [])
  return (
    <div className="App">
      <Header
        term={searchTerm}
        rate={searchRate}
        searchKeyword={searchWordHandler}
        searchRate={searchRatehandler}
      ></Header>
      <div className="MainContent">
        <MovieList
          movie={searchTerm.length < 1 && searchRate === 0 ? searchResults :searchResults1}
        ></MovieList>
        <AddMovie addMovieFn={addNewMovie} />
      </div>

    </div>
  );
}
export default App;