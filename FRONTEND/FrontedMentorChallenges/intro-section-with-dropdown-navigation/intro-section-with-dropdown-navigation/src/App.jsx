import React, { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Page/Landing";

function App() {
  return (
    <div className="app_container">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
