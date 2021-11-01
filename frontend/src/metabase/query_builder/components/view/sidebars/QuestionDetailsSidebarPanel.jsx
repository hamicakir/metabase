import PropTypes from "prop-types";
import React from "react";

import { PLUGIN_MODERATION } from "metabase/plugins";
import { ClampedDescription } from "metabase/query_builder/components/ClampedDescription";
import QuestionActionButtons from "metabase/query_builder/components/QuestionActionButtons";
import QuestionActivityTimeline from "metabase/query_builder/components/QuestionActivityTimeline";

import {
  Container,
  SidebarPaddedContent,
} from "./QuestionDetailsSidebarPanel.styled";

export default QuestionDetailsSidebarPanel;

QuestionDetailsSidebarPanel.propTypes = {
  question: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  removeModerationReview: PropTypes.func.isRequired,
};

function QuestionDetailsSidebarPanel({
  question,
  onOpenModal,
  removeModerationReview,
}) {
  const canWrite = question.canWrite();
  const description = question.description();

  const onDescriptionEdit = canWrite
    ? () => {
        onOpenModal("edit");
      }
    : undefined;

  return (
    <Container>
      <SidebarPaddedContent>
        <QuestionActionButtons
          canWrite={canWrite}
          isDataset={question.isDataset()}
          onOpenModal={onOpenModal}
        />
        <ClampedDescription
          className="pl1 pb2"
          visibleLines={8}
          description={description}
          onEdit={onDescriptionEdit}
        />
        <PLUGIN_MODERATION.QuestionModerationSection question={question} />
      </SidebarPaddedContent>
      <QuestionActivityTimeline question={question} />
    </Container>
  );
}
