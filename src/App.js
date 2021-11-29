import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";

import Cart from "./components/Cart/Cart";

import React from "react";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
