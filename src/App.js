import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";

import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
