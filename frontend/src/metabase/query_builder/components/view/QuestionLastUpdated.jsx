/* eslint-disable react/prop-types */
import { Flex } from "grid-styled";
import moment from "moment";
import React from "react";
import { t } from "ttag";

import Icon from "metabase/components/Icon";

export default function QuestionLastUpdated({ result, ...props }) {
  return result ? (
    <Flex align="center" {...props}>
      <Icon name="clock" mr={1} />
      {t`Updated ${moment(result.updated_at).fromNow()}`}
    </Flex>
  ) : null;
}

QuestionLastUpdated.shouldRender = ({ result }) => result && result.cached;
