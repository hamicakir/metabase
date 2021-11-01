/* eslint "react/prop-types": "warn" */
import React, { Component } from "react";
import { connect } from "react-redux";

import fitViewport from "metabase/hoc/FitViewPort";

import {
  setUserDetails,
  validatePassword,
  setActiveStep,
  validateDatabase,
  setDatabaseDetails,
  setLanguageDetails,
  setAllowTracking,
  submitSetup,
} from "../actions";
import Setup from "../components/Setup";
import { DATABASE_FORM_NAME, setupSelectors } from "../selectors";

const mapStateToProps = setupSelectors;

const mapDispatchToProps = {
  setLanguageDetails,
  setUserDetails,
  setDatabaseDetails,
  validatePassword,
  setActiveStep,
  validateDatabase,
  setAllowTracking,
  submitSetup,
};

@connect(mapStateToProps, mapDispatchToProps)
@fitViewport
export default class SetupApp extends Component {
  render() {
    return <Setup {...this.props} databaseFormName={DATABASE_FORM_NAME} />;
  }
}
