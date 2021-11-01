import PropTypes from "prop-types";
import React from "react";

const AdminEmptyText = ({ message }) => (
  <h2 className="text-medium">{message}</h2>
);

AdminEmptyText.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AdminEmptyText;
