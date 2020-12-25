import React from "react";
import classNames from "classnames";
import "../scss/sorting.scss";
import "../scss/mediaSorting.scss";
import Triangle from "../assets/img/triangle.png";
import PropTypes from "prop-types";

const Sorting = React.memo(function Sorting({
  items,
  onSelectItem,
  activeSortType,
}) {
  const [visibleSorting, setVisibleSorting] = React.useState(false);
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const sortRef = React.useRef();

  const selectItem = (type) => {
    onSelectItem(type);
    setVisibleSorting(false);
  };
  const switchVisibleSorting = () => {
    setVisibleSorting(!visibleSorting);
  };

  const outsideClick = (event) => {
    // includes - checks if the required value is in the array
    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);
    if (!path.includes(sortRef.current)) {
      setVisibleSorting(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", outsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sorting">
      <div className="sorting__label">
        <img
          src={Triangle}
          alt="images"
          className={classNames(
            "sorting__Triangle",
            {
              active: visibleSorting === true,
            },
            {
              disable: visibleSorting === false,
            }
          )}
          onClick={switchVisibleSorting}
        ></img>
        <b>Сортировка по:</b>
        <span onClick={switchVisibleSorting}>{activeLabel}</span>
      </div>
      {visibleSorting && (
        <div className="sorting__setting">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  className={activeSortType === obj.type ? "active" : ""}
                  key={`${obj.type}_${index}`}
                  onClick={() => selectItem(obj)}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

Sorting.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSelectItem: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

Sorting.defaultProps = {
  items: [],
};
export default Sorting;
