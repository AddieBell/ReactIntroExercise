import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li> 
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <main>
        <HomePage/>
      </main>
    </>
  );
}

export default App;
