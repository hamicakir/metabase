/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";
import { t } from "ttag";

import NativeQuery from "metabase-lib/lib/queries/NativeQuery";

import Icon from "metabase/components/Icon";
import Tooltip from "metabase/components/Tooltip";

const DataReferenceButton = ({
  isShowingDataReference,
  toggleDataReference,
  size,
  className,
}) => (
  <Tooltip tooltip={t`Learn about your data`}>
    <a
      className={cx(className, "transition-color text-brand-hover", {
        "text-brand": isShowingDataReference,
      })}
    >
      <Icon name="reference" size={size} onClick={toggleDataReference} />
    </a>
  </Tooltip>
);

DataReferenceButton.shouldRender = ({ question }) =>
  question.query() instanceof NativeQuery;

export default DataReferenceButton;
