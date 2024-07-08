import { useEffect, useState } from "react";
import "../App.css";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";

function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json();
      })
      .then((data) => {
        const moviesData = data.map((film) => ({
          id: film.id,
          title: film.title,
          director: film.director,
          rt_score: film.rt_score,
        }));
        setMovies(moviesData);
      })
      .catch((err) => {
        console.Error(err);
      });
  }, []);

  const handleSort = (criteria) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (criteria === "rt_score") {
        return b[criteria] - a[criteria];
      }
      return a[criteria].localeCompare(b[criteria]);
    });
    setMovies(sortedMovies);
  };

  let filmsByDirector = filterFilmsByDirector(movies, searchDirector);
  let directors = getListOf(movies, "director");

  return (
    <div className="container">
      <h1>Studio Ghibli Films</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="searchDirector">Filter by Director</label>
          <select
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map((director, idx) => {
              return (
                <option key={director + idx} value={director}>
                  {director}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="sort-buttons">
        <button onClick={() => handleSort("title")}>Sort By Title</button>
        <button onClick={() => handleSort("director")}>Sort By Director</button>
        <button onClick={() => handleSort("rt_score")}>Sort By Rating</button>
      </div>
      <div>
        <ul>
          {filmsByDirector.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> by {movie.director} (Rating:{" "}
              {movie.rt_score})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilmsPage;
