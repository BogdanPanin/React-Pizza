import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import basketReducer from "./basket";

//создает root reducer
const rootReducer = combineReducers({
  filters: filtersReducer,
  basket: basketReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
