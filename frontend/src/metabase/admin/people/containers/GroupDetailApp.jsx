import React, { Component } from "react";
import { connect } from "react-redux";

import Group from "metabase/entities/groups";
import User from "metabase/entities/users";
import { getUser } from "metabase/selectors/user";

import GroupDetail from "../components/GroupDetail";
import { getUsersWithMemberships } from "../selectors";

@User.loadList()
@Group.load({ id: (state, props) => props.params.groupId })
@connect((state, props) => ({
  currentUser: getUser(state),
  users: getUsersWithMemberships(state, props),
}))
export default class GroupDetailApp extends Component {
  render() {
    return <GroupDetail {...this.props} />;
  }
}
