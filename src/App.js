import React from "react";
import "./scss/app.scss";
import "./scss/mediaApp.scss";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Basket, BasketClear } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Route path="/react-pizza" exact component={Home} />
        <Route path="/react-pizza/basket" component={Basket} />
        <Route path="/react-pizza/empty" component={BasketClear} />
      </main>
    </div>
  );
}

export default App;
