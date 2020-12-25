import React from "react";
import {
  PizzaBlock,
  Sorting,
  Categories,
  PizzaLoadingBlock,
} from "../components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { addPizzaToBasket } from "../redux/actions/basket";
import { fetchPizzas } from "../redux/actions/pizzas";
import DropRight from "../components/DropRight";

function Home() {
  const dispatch = useDispatch();

  const categoryItems = ["Мясные", "Вегетарианская", "Гриль", "Острые"];
  const sortingItems = [
    { name: "популярности", type: "popular", order: "desc" },
    { name: "по цене", type: "price", order: "desc" },
    { name: "по алфавиту", type: "name", order: "asc" },
  ];

  const { items, category, sortBy, isLoading, itemsBasket } = useSelector(
    ({ pizzas, filters, basket }) => {
      return {
        items: pizzas.items,
        category: filters.category,
        sortBy: filters.sortBy,
        isLoading: pizzas.isLoading,
        itemsBasket: basket.items,
      };
    }
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  const onSelectSortBy = (type) => {
    dispatch(setSortBy(type));
  };

  const onAddPizzaToBasket = (pizza) => {
    dispatch(addPizzaToBasket(pizza));
  };
  return (
    <section>
      <div>
        <div className="content__top">
          <Categories
            category={category}
            onSelectItem={onSelectCategory}
            items={categoryItems}
          ></Categories>
          <Sorting
            onSelectItem={onSelectSortBy}
            activeSortType={sortBy.type}
            items={sortingItems}
          ></Sorting>
          <DropRight />
        </div>
        <div className="heading_home">
          <h1>Все пиццы</h1>
        </div>
        <div className="content__flex">
          {isLoading
            ? items.map((obj) => (
                <PizzaBlock
                  onClickAddPizza={onAddPizzaToBasket}
                  addedCount={
                    itemsBasket[obj.id] && itemsBasket[obj.id].items.length
                  }
                  key={obj.id}
                  {...obj}
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Home.defaultProps = {
  items: [],
};

export default Home;
