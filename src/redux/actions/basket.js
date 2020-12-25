export const setPrice = (price) => ({
  type: "SET_PRICE",
  payload: price,
});

export const setQuantity = (count) => ({
  type: "SET_QUANTITY",
  payload: count,
});

export const addPizzaToBasket = (pizzaObj) => ({
  type: "ADD_PIZZA_BASKET",
  payload: pizzaObj,
});

export const clearBasket = () => ({
  type: "CLEAR_BASKET",
});

export const removeBasketItem = (id) => ({
  type: "REMOVE_BASKET_ITEM",
  payload: id,
});

export const plusItem = (id) => ({
  type: "PLUS_BASKET_ITEM",
  payload: id,
});

export const minusItem = (id) => ({
  type: "MINUS_BASKET_ITEM",
  payload: id,
});
