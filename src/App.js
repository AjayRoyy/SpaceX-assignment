import logo from "./media/spacex.png";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <center>
          <img src={logo} alt="logo" width="250px" />
        </center>
      </nav>
      <Dashboard />
    </div>
  );
}

export default App;
