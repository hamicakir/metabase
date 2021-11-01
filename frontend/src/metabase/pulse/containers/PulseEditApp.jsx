/* eslint "react/prop-types": "warn" */
import React, { Component } from "react";
import { connect } from "react-redux";
import { push, goBack } from "react-router-redux";

import Collections from "metabase/entities/collections";
import Pulses from "metabase/entities/pulses";
import User from "metabase/entities/users";
import title from "metabase/hoc/Title";
import { getUser } from "metabase/selectors/user";

import {
  setEditingPulse,
  updateEditingPulse,
  saveEditingPulse,
  fetchPulseFormInput,
  fetchPulseCardPreview,
  testPulse,
} from "../actions";
import PulseEdit from "../components/PulseEdit";
import {
  getPulseId,
  getEditingPulse,
  getPulseCardPreviews,
  getPulseFormInput,
} from "../selectors";

const mapStateToProps = (state, props) => ({
  pulseId: getPulseId(state, props),
  pulse: getEditingPulse(state, props),
  cardPreviews: getPulseCardPreviews(state, props),
  formInput: getPulseFormInput(state, props),
  user: getUser(state),
  initialCollectionId: Collections.selectors.getInitialCollectionId(
    state,
    props,
  ),
});

const mapDispatchToProps = {
  setEditingPulse,
  updateEditingPulse,
  saveEditingPulse,
  fetchPulseFormInput,
  fetchPulseCardPreview,
  setPulseArchived: Pulses.actions.setArchived,
  testPulse,
  onChangeLocation: push,
  goBack,
};

@User.loadList()
@connect(mapStateToProps, mapDispatchToProps)
@title(({ pulse }) => pulse && pulse.name)
export default class PulseEditApp extends Component {
  render() {
    return <PulseEdit {...this.props} />;
  }
}
