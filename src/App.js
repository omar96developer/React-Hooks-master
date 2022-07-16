import Inizio from "./lezioni/11-React-Router/v6/inizio";
import { BrowserRouter as Router, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <section className="container text-center my-3">
        <Router>
          <nav className="d-flex flex-row justify-content-center mx-auto gap-2 mb-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/profile/1">Profile1</Link>
          </nav>

          <Inizio />
        </Router>
      </section>
    </div>
  );
}

export default App;
