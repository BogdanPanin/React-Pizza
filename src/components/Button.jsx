import React from "react";
import classNames from "classnames";
import "../scss/button.scss";
import "../scss/mediaButton.scss";
import PropTypes from "prop-types";

function Button({
  children,
  Style,
  onClick,
  outlineOrange,
  outlineWhite,
  circle,
  back,
  black,
  orange,
  basket,
  remove,
  Back,
}) {
  return (
    <button
      style={Style}
      onClick={onClick}
      className={classNames(
        "button",
        {
          button_outline_white: outlineWhite,
        },
        {
          button_outline_orange: outlineOrange,
        },
        {
          button_circle: circle,
        },
        {
          button_delete: remove,
        },
        {
          button_black: black,
        },
        {
          button_orange: orange,
        },
        {
          button_basket: basket,
        },
        {
          button_back: Back,
        }
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  Style: PropTypes.object,
  onClick: PropTypes.func,
  outlineOrange: PropTypes.bool,
  outlineWhite: PropTypes.bool,
  circle: PropTypes.bool,
  back: PropTypes.bool,
  black: PropTypes.bool,
  orange: PropTypes.bool,
  basket: PropTypes.bool,
  remove: PropTypes.bool,
  Back: PropTypes.bool,
};

export default Button;
