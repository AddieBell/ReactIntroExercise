function HomePage() {
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <form>
        <label htmlFor="movieInput">Add a Movie</label>
        <input type="text" id="movieInput" name="movieInput" />
        <button type="submit">Add Movie</button>
      </form>
      <ul>
        <li>Harry Potter</li>
        <li>Lord of the Rings</li>
        <li>About Time</li>
        <li>Midnight in Paris</li>
      </ul>
    </div>
  );
}

export default HomePage;
