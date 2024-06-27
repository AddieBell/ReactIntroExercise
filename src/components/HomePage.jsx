import "./HomePage.css"

function HomePage() {
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <form>
        <label htmlFor="movieInput">Add a Movie</label>
        <input type="text" id="movieInput" name="movieInput" />
        <button type="submit">Add Movie</button>
      </form>
      <ul id="watchList">
        <li>
            <p>Harry Potter</p>
        </li>
        <li>
            <p>Lord of the Rings</p>
        </li>
        <li>
            <p>About Time</p>
        </li>
        <li>
            <p>Midnight in Paris</p>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
