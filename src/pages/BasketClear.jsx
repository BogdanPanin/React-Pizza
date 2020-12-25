import React from "react";
import "../scss/basketClear.scss";
import "../scss/mediaBasketClear.scss";
import Smail from "../assets/img/smail.png";
import Empty from "../assets/img/empty.png";
import { Button } from "../components";
import { Link } from "react-router-dom";

function BasketClear() {
  return (
    <section className="wrapper_basket-clear">
      <div className="basket-clear__heading">
        <h1>Корзина пустая</h1>
        <img src={Smail} alt="images"></img>
      </div>
      <p className="basket-clear__paragraf">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={Empty} alt="images"></img>
      <Link to="/react-pizza/">
        <Button black Style={{ marginTop: "74px" }}>
          <p className="basket-clear__back">Вернуться назад</p>
        </Button>
      </Link>
    </section>
  );
}

export default BasketClear;
