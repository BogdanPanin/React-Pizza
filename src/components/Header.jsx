import React from "react";
import "../scss/header.scss";
import "../scss/mediaHeader.scss";
import Logo from "../assets/img/logo.png";
import Basket from "../assets/img/bascet.png";
import { Button } from "../components";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { price, totalCount } = useSelector(({ basket }) => ({
    price: basket.price,
    totalCount: basket.totalCount,
  }));
  return (
    <header className="header">
      <Link to="/react-pizza/" className="header__a">
        <div className="header__container">
          <div className="header__logo">
            <img src={Logo} alt=""></img>
          </div>
          <h2>REACT PIZZA</h2>
          <Route path="/react-pizza" exact>
            <p>Cамая вкусная пицца во вселенной</p>
          </Route>
          <Route path="/react-pizza/basket" exact>
            <p>Самая реактивная пицца</p>
          </Route>
        </div>
      </Link>
      <div className="header__button">
        <Link to="/react-pizza/basket">
          <Button basket>
            <p className="price">{price} &#8381;</p>
            <div></div>
            <img className="basket" src={Basket} alt="IMG"></img>
            <p className="number">{totalCount}</p>
          </Button>
        </Link>
      </div>
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
