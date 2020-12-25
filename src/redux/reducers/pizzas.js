const initialPizzas = {
  items: [],
  isLoading: false,
  pizzaQuantity: 0,
};

const pizzas = (state = initialPizzas, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return { ...state, items: action.payload, isLoading: true };
    case "SET_PIZZA_QUANTITY":
      return { ...state, pizzaQuantity: state.pizzaQuantity + action.payload };
    case "SET_LOADED":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default pizzas;
