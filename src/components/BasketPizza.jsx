import React from "react";
import { Button } from "../components";
import Add from "../assets/img/add.png";
import Minus from "../assets/img/minus.png";
import PropTypes from "prop-types";

function BasketPizza({
  id,
  name,
  type,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };
  const handlePlusItem = () => {
    onPlus(id);
  };
  const handleMenusItem = () => {
    onMinus(id);
  };

  return (
    <div className="basket__store">
      <div className="basket__line"></div>
      <div className="basket__block">
        <img className="basket__pizza" alt="images" src={imageUrl}></img>
        <div className="basket__article">
          <p className="basket__title">{name}</p>
          <p className="basket__subtitle">
            {type} тесто, {size} см.
          </p>
        </div>
        <div className="basket__buttons">
          <Button
            circle
            Style={{ left: "0px", marginRight: "12px" }}
            className="basket__minus"
            onClick={handleMenusItem}
          >
            <img src={Minus} alt="images"></img>
          </Button>
          <p style={{ marginRight: "12px" }}>{totalCount}</p>
          <Button circle onClick={handlePlusItem}>
            <img src={Add} alt="images" className="basket__add"></img>
          </Button>
        </div>
        <p className="basket__price">{totalPrice} &#8381;</p>
        <Button remove onClick={handleRemoveClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="delete"
              d="M11.7479 9.95572L9.49931 7.70712L11.7479 5.45852C12.1618 5.04459 12.1618 4.37338 11.7479 3.95945C11.334 3.54552 10.6628 3.54552 10.2488 3.95945L8.00024 6.20805L5.75164 3.95945C5.33771 3.54552 4.66651 3.54552 4.25258 3.95945C3.83865 4.37338 3.83865 5.04459 4.25258 5.45852L6.50118 7.70712L4.25258 9.95572C3.83865 10.3696 3.83865 11.0409 4.25258 11.4548C4.66651 11.8687 5.33772 11.8687 5.75164 11.4548L8.00024 9.20619L10.2488 11.4548C10.6628 11.8687 11.334 11.8687 11.7479 11.4548C12.1618 11.0409 12.1618 10.3696 11.7479 9.95572Z"
              fill="#D0D0D0"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

BasketPizza.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default BasketPizza;
