import React from "react";
import { IndexRoute } from "react-router";
import { t } from "ttag";

import { Route } from "metabase/hoc/Title";

import StoreAccount from "./containers/StoreAccount";
import StoreActivate from "./containers/StoreActivate";

export default function getRoutes() {
  return (
    <Route key="store" path="store" title={t`Store`}>
      <IndexRoute component={StoreAccount} />
      <Route path="activate" component={StoreActivate} />
    </Route>
  );
}
