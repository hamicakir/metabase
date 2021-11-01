/* eslint "react/prop-types": "warn" */
import PropTypes from "prop-types";
import React from "react";

import S from "./List.css";

const List = ({ children }) => <ul className={S.list}>{children}</ul>;

List.propTypes = {
  children: PropTypes.any.isRequired,
};

export default React.memo(List);
