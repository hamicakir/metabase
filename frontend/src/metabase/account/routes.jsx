import React from "react";
import { IndexRedirect } from "react-router";
import { t } from "ttag";

import { Route } from "metabase/hoc/Title";

import LoginHistoryApp from "./login-history/containers/LoginHistoryApp";
import getNotificationRoutes from "./notifications/routes";
import UserPasswordApp from "./password/containers/UserPasswordApp";
import UserProfileApp from "./profile/containers/UserProfileApp";
import AccountSettingsApp from "./settings/containers/AccountSettingsApp";

const getRoutes = (store, IsAuthenticated) => {
  return (
    <Route path="/account" component={IsAuthenticated}>
      <Route title={t`Account settings`} component={AccountSettingsApp}>
        <IndexRedirect to="profile" />
        <Route path="profile" component={UserProfileApp} />
        <Route path="password" component={UserPasswordApp} />
        <Route path="login-history" component={LoginHistoryApp} />
        {getNotificationRoutes()}
      </Route>
    </Route>
  );
};

export default getRoutes;
