import { useEffect, useState } from "react";
import "../App.css";

function FilmsPage() {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="container">
      <h1>Studio Ghibli Films</h1>
      <div className="sort-buttons">
        <button onClick={() => handleSort("title")}>Sort By Title</button>
        <button onClick={() => handleSort("director")}>Sort By Director</button>
        <button onClick={() => handleSort("rt_score")}>Sort By Rating</button>
      </div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> by {movie.director} (Rating:{" "}
            {movie.rt_score})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;
