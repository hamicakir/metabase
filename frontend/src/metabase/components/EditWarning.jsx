import PropTypes from "prop-types";
import React from "react";

export default function EditWarning({ title }) {
  if (title) {
    return (
      <div className="EditHeader wrapper py1 flex align-center">
        <span className="EditHeader-title">{title}</span>
      </div>
    );
  } else {
    return null;
  }
}

EditWarning.propTypes = {
  title: PropTypes.string.isRequired,
};
