import "./App.css";
import React, { useState, useEffect } from "react";

import Router from "./Components/Routes/Router";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <Router />
        </div>
      )}
    </div>
  );
}

export default App;
