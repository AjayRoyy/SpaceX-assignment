import React, { useState, useEffect } from "react";
import logo from "./media/spacex.png";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const LoadingTimmer = setTimeout(() => {
      setisLoading(false);
    }, 1000);

    return () => {
      setisLoading(true);
      clearTimeout(LoadingTimmer);
    };
  }, []);
  return (
    <div className="App">
      <nav className="navbar">
        <center>
          <img src={logo} alt="logo" width="250px" />
        </center>
      </nav>
      <Dashboard isLoading={isLoading} />
    </div>
  );
}

export default App;
