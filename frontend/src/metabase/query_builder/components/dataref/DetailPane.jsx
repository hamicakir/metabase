/* eslint "react/prop-types": "warn" */
import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { t } from "ttag";

import Card from "metabase/components/Card";
import Icon from "metabase/components/Icon";

const DetailPane = ({ name, description, extra, values }) => (
  <div className="ml1">
    <div className="flex align-center">
      <Icon name="field" className="text-medium pr1" size={16} />
      <h3 className="text-wrap">{name}</h3>
    </div>
    <p className={cx("text-spaced", { "text-medium": !description })}>
      {description || t`No description`}
    </p>
    {extra}
    {values && values.length > 0 && (
      <div>
        <h5 className="text-uppercase mt4 mb2">{t`Sample values`}</h5>
        <Card>
          <ul>
            {values.map((value, index) => (
              <li
                key={index}
                className={cx("p1 text-wrap", {
                  "border-bottom": index < values.length - 1,
                })}
              >
                {value[0]}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    )}
  </div>
);

DetailPane.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  error: PropTypes.string,
  extra: PropTypes.element,
  values: PropTypes.array,
};

export default DetailPane;
