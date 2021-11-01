/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";

const DEFAULT_STYLE = {
  borderWidth: 2,
};

const Input = ({ className, small, medium, style = {}, ...props }) => (
  <input
    className={cx("input", className, {
      // HACK: reuse Button styles
      "Button--small": small,
      "Button-medium": medium,
    })}
    style={{ ...DEFAULT_STYLE, ...style }}
    {...props}
  />
);

export default Input;
