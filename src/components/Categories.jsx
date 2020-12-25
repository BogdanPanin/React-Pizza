import React from "react";
import "../scss/categories.scss";
import "../scss/mediaCategories.scss";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  items,
  onSelectItem,
  category,
}) {
  const selectItem = (index) => {
    onSelectItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => selectItem(null)}
          className={category === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={category === index ? "active" : ""}
              onClick={() => selectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectItem: PropTypes.func,
};

Categories.defaultProps = {
  items: [],
  category: null,
};

export default Categories;
