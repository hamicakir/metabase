/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";

export default function Grabber({ className, style }) {
  return <div className={cx("Grabber cursor-grab", className)} style={style} />;
}
