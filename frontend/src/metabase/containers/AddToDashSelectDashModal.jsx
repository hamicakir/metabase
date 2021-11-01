/* eslint-disable react/prop-types */
import { Flex } from "grid-styled";
import React, { Component } from "react";
import { connect } from "react-redux";
import { t } from "ttag";

import type { Card } from "metabase-types/types/Card";
import type { Dashboard as DashboardType } from "metabase-types/types/Dashboard";

import CreateDashboardModal from "metabase/components/CreateDashboardModal";
import Icon from "metabase/components/Icon";
import Link from "metabase/components/Link";
import ModalContent from "metabase/components/ModalContent";
import DashboardPicker from "metabase/containers/DashboardPicker";
import * as Urls from "metabase/lib/urls";

function mapStateToProps(state) {
  return {
    dashboards: state.entities.dashboards,
  };
}

@connect(mapStateToProps)
export default class AddToDashSelectDashModal extends Component {
  state = {
    shouldCreateDashboard: false,
  };

  props: {
    card: Card,
    onClose: () => void,
    onChangeLocation: string => void,
    createDashboard: DashboardType => any,
  };

  navigateToDashboard = dashboard => {
    this.props.onChangeLocation(
      Urls.dashboard(dashboard, { addCardWithId: this.props.card.id }),
    );
  };

  onDashboardSelected = dashboardId => {
    const dashboard = this.props.dashboards[dashboardId];
    this.navigateToDashboard(dashboard);
  };

  render() {
    if (this.state.shouldCreateDashboard) {
      return (
        <CreateDashboardModal
          collectionId={this.props.card.collection_id}
          onSaved={this.navigateToDashboard}
          onClose={() => this.setState({ shouldCreateDashboard: false })}
        />
      );
    } else {
      return (
        <ModalContent
          id="AddToDashSelectDashModal"
          title={t`Add this question to a dashboard`}
          onClose={this.props.onClose}
        >
          <DashboardPicker onChange={this.onDashboardSelected} />
          <Link
            mt={1}
            onClick={() => this.setState({ shouldCreateDashboard: true })}
          >
            <Flex align="center" className="text-brand" py={2}>
              <Icon name="add" mx={1} bordered />
              <h4>{t`Create a new dashboard`}</h4>
            </Flex>
          </Link>
        </ModalContent>
      );
    }
  }
}
