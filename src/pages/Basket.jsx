import React from "react";
import "../scss/app.scss";
import "../scss/basket.scss";
import "../scss/mediaBasket.scss";
import BasketLogo from "../assets/img/basketLogo.png";
import { Button, BasketPizza } from "../components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearBasket,
  removeBasketItem,
  plusItem,
  minusItem,
} from "../redux/actions/basket";
import BasketClear from "./BasketClear";

function Basket() {
  const dispatch = useDispatch();
  const { price, totalCount, items } = useSelector(({ basket }) => {
    return {
      price: basket.price,
      totalCount: basket.totalCount,
      items: basket.items,
    };
  });
  const onClearBasket = () => {
    if (window.confirm("Вы действительно хотите очистить корзину ?")) {
      dispatch(clearBasket());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите очистить корзину ?")) {
      dispatch(removeBasketItem(id));
    }
  };
  const onPlusItem = (id) => {
    dispatch(plusItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusItem(id));
  };

  const pizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onPayment = () => {
    pizzas.forEach(function (value) {
      alert(JSON.stringify(value, ["name", "price", "size", "type"], "\t"));
    });
  };
  return (
    <div>
      {totalCount ? (
        <section className="wrapper_basket">
          <div className="heading_basket">
            <img src={BasketLogo} alt="images"></img>
            <h1 className="">Корзина</h1>
          </div>
          <div className="basket__delete" onClick={onClearBasket}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Очистить корзину</p>
          </div>
          {pizzas &&
            pizzas.map((obj) => (
              <BasketPizza
                key={obj.id}
                {...obj}
                id={obj.id}
                totalPrice={items[obj.id].price}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onPlus={onPlusItem}
                onMinus={onMinusItem}
              />
            ))}
          <div className="basket__total_block">
            <p className="basket__total_quantity">
              Всего пицц:
              <b
                style={{
                  fontFamily: "Proxima Nova",
                  fontSize: "22px",
                  lineHeight: "27px",
                  letterSpacing: "0.01em",
                }}
              >
                &#160;{totalCount} шт.
              </b>
            </p>
            <p className="basket__total_price">
              Сумма заказа: <span>{price} &#8381;</span>
            </p>
          </div>
          <div className="basket__link">
            <Link to="/react-pizza/">
              <Button Back>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Вернуться назад</p>
              </Button>
            </Link>
            <Button orange onClick={onPayment} Style={{ right: "0px" }}>
              <p>Оплатить сейчас</p>
            </Button>
          </div>
        </section>
      ) : (
        <BasketClear></BasketClear>
      )}
    </div>
  );
}

export default Basket;
