import "./HomePage.css";
import { useState } from "react";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  const handleInputChange = (e) => {
    setNewMovie(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie(``);
  };

  const handleRemoveMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Movie Watchlist</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="movieInput">Add a Movie</label>
        <input
          type="text"
          id="movieInput"
          name="movieInput"
          onChange={handleInputChange}
        />
        <button type="submit">Add Movie</button>

        <ul id="watchList">
          {movies.map((movie, index) => (
            <li key={index}>
              {movie}
              <button onClick={() => handleRemoveMovie(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default HomePage;
