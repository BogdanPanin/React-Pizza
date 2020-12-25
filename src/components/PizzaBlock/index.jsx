import React from "react";
import "../../scss/pizzaBlock.scss";
import "../../scss/mediaPizzaBlock.scss";
import { Button } from "..";
import classNames from "classnames";
import PropTypes from "prop-types";

function PizzaBlock({
  id,
  name,
  imageUrl,
  types,
  sizes,
  price,
  onClickAddPizza,
  addedCount,
}) {
  const typePizza = ["тонкое", "традиционное"];
  const sizePizza = [26, 30, 40];

  const [selectType, setSelectType] = React.useState(types[0]);
  const [selectSize, setSelectSize] = React.useState(0);

  const onTypePizza = (index) => {
    setSelectType(index);
  };

  const onSizePizza = (index) => {
    setSelectSize(index);
  };
  const onAddPPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: sizePizza[selectSize],
      type: typePizza[selectType],
    };
    onClickAddPizza(obj);
  };
  return (
    <div className="pizza">
      <img src={imageUrl} alt="images" className="pizza__images"></img>
      <h3>{name}</h3>
      <div className="pizza__setting">
        <ul>
          {typePizza &&
            typePizza.map((type, index) => (
              <li
                className={classNames({
                  active: selectType === index,
                  disabled: !types.includes(index),
                })}
                key={type}
                onClick={() => onTypePizza(index)}
              >
                {type}
              </li>
            ))}
        </ul>
        <ul>
          {sizePizza &&
            sizePizza.map((size, index) => (
              <li
                className={classNames({
                  active: selectSize === index,
                  disabled: !sizes.includes(size),
                })}
                key={size}
                onClick={() => onSizePizza(index)}
              >
                {size} см.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza__button">
        <Button outlineOrange onClick={onAddPPizza}>
          <svg
            className="pizza__button__add"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="pizza__button__add_white"
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <p className="pizza__button__quantity">Добавить</p>
          {addedCount && (
            <div className="pizza__button__circle">
              <p>{addedCount}</p>
            </div>
          )}
        </Button>
      </div>
      <p className="pizza__price">от {price} &#8381;</p>
    </div>
  );
}

PizzaBlock.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number,
  category: PropTypes.number,
  rating: PropTypes.number,
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: "---",
  imageUrl: "",
  types: [],
  sizes: [],
  price: 0,
  category: 0,
  rating: 0,
};

export default PizzaBlock;
