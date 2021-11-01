/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Question from "metabase-lib/lib/Question";

import QuestionResultLoader from "metabase/containers/QuestionResultLoader";
import { getMetadata } from "metabase/selectors/metadata";

import "./AuditTableVisualization";

const mapStateToProps = (state, props) => ({
  metadata: getMetadata(state),
});

const mapDispatchToProps = {
  onChangeLocation: push,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class AuditTable extends React.Component {
  render() {
    const { metadata, card } = this.props;
    const question = new Question(card.card, metadata);

    return (
      <QuestionResultLoader className="mt3" question={question}>
        {this.props.children}
      </QuestionResultLoader>
    );
  }
}
