/* eslint-disable react/prop-types */
import React from "react";
import { t } from "ttag";

import Badge from "metabase/components/Badge";
import Link from "metabase/components/Link";

export default function QuestionLineage({
  question,
  originalQuestion,
  ...props
}) {
  if (!QuestionLineage.shouldRender({ question, originalQuestion })) {
    return null;
  }
  return (
    <Badge {...props}>
      {t`Started from`}{" "}
      <Link className="link" to={originalQuestion.getUrl()}>
        {originalQuestion.displayName()}
      </Link>
    </Badge>
  );
}

QuestionLineage.shouldRender = ({ question, originalQuestion }) =>
  !question.isSaved() && !!originalQuestion;
