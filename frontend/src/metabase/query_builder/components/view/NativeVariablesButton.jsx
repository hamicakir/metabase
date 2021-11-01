/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";
import { t } from "ttag";

import NativeQuery from "metabase-lib/lib/queries/NativeQuery";

import Icon from "metabase/components/Icon";
import Tooltip from "metabase/components/Tooltip";

const NativeVariablesButton = ({
  toggleTemplateTagsEditor,
  isShowingTemplateTagsEditor,
  className,
  size,
}) => (
  <Tooltip tooltip={t`Variables`}>
    <a
      className={cx(className, "transition-color text-brand-hover", {
        "text-brand": isShowingTemplateTagsEditor,
      })}
    >
      <Icon name="variable" size={size} onClick={toggleTemplateTagsEditor} />
    </a>
  </Tooltip>
);

NativeVariablesButton.shouldRender = ({ question }) =>
  question.query() instanceof NativeQuery &&
  question.database() &&
  question.database().hasFeature("native-parameters");

export default NativeVariablesButton;
