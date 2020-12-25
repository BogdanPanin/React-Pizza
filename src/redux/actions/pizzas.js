import firebase from "firebase";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  const db = firebase.database();
  const pizzas = db.ref("pizzas");
  pizzas.on("value", (elem) => {
    const item = elem.val();
    let arr = item.filter(function (currentValue) {
      if (category !== null) {
        return currentValue.category === category;
      } else if (category === null) {
        return currentValue;
      }
    });
    if (sortBy.type === "price")
      arr.sort((prev, next) => {
        return prev.price - next.price;
      });
    if (sortBy.type === "name")
      arr.sort((prev, next) => {
        if (prev.name < next.name) {
          return -1;
        }
        if (prev.name > next.name) {
          return 1;
        }
        return 0;
      });
    if (sortBy.type === "popular")
      arr.sort((prev, next) => {
        return next.rating - prev.rating;
      });

    dispatch(savePizza(arr));
  });
};

export const savePizza = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const savePizzaQuantity = (quantity) => ({
  type: "SET_PIZZA_QUANTITY",
  payload: quantity,
});
