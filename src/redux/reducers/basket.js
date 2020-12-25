const initialBasket = {
  items: {},
  price: 0,
  totalCount: 0,
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const basket = (state = initialBasket, action) => {
  switch (action.type) {
    case "ADD_PIZZA_BASKET": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          price: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "price");
      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        price: totalPrice,
      };
    }
    case "CLEAR_BASKET":
      return {
        ...state,
        items: {},
        price: 0,
        totalCount: 0,
      };

    case "REMOVE_BASKET_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].price;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        price: state.price - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_BASKET_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          price: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "price");

      return {
        ...state,
        items: newItems,
        totalCount,
        price: totalPrice,
      };
    }
    case "MINUS_BASKET_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          price: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "price");
      return {
        ...state,
        items: newItems,
        totalCount,
        price: totalPrice,
      };
    }
    default:
      return state;
  }
};

export default basket;
