/* eslint "react/prop-types": "warn" */
import PropTypes from "prop-types";
import React, { Component } from "react";
import { t } from "ttag";

import AdminLayout from "metabase/components/AdminLayout";
import { LeftNavPane, LeftNavPaneItem } from "metabase/components/LeftNavPane";

export default class AdminPeopleApp extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;
    return (
      <AdminLayout
        sidebar={
          <LeftNavPane>
            <LeftNavPaneItem name={t`People`} path="/admin/people" index />
            <LeftNavPaneItem name={t`Groups`} path="/admin/people/groups" />
          </LeftNavPane>
        }
      >
        {children}
      </AdminLayout>
    );
  }
}
