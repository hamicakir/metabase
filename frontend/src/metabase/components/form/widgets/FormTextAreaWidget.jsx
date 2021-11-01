/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";

import { formDomOnlyProps } from "metabase/lib/redux";

const FormTextAreaWidget = ({
  placeholder,
  field,
  className,
  rows,
  autoFocus,
}) => (
  <textarea
    autoFocus={autoFocus}
    className={cx(className, "Form-input full")}
    rows={rows}
    placeholder={placeholder}
    aria-labelledby={`${field.name}-label`}
    {...formDomOnlyProps(field)}
  />
);

export default FormTextAreaWidget;
