import React from "react";
import "./_App.scss";

import NavBar from "./components/Header/Header";
import Competitions from "./components/Competitions/Competitions";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Competitions />
    </React.Fragment>
  );
};

export default App;
